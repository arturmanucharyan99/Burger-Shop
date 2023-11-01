import {FC, useEffect,useState} from "react";
import Footer from "../../components/Footer/Footer";
import "./Cart.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import CartAbout from "../../components/CartAbout/CartAbout";


interface ForCart  {
    user_id : number,
    item : number
}

interface ForUser {
    id:number,
    email:string,
    password:string,
    username:string
}

interface ForBurgers {
    id:number,
    name:string,
    price:number,
    about:string,
    img:string
}


const Cart:FC = ({}) => {
    const {cartGet} = useActions();
    const {fetchBurgers} = useActions();
    const {burgers} = useTypedSelector(state => state.burgers);
    const {cart,loading,error} = useTypedSelector(state => state.cartGet);
    const [newCart, setNewCart] = useState<ForCart[]>([]); 
    const [mainCart, setMainCart] = useState<ForBurgers[]>([]); 
    const [currentUser, setCurrentUser] = useState<ForUser | null>(null);
    
    
    useEffect(()=>{
        cartGet();
        fetchBurgers();
        const user = localStorage.getItem('currentUser');
        if(window && user){
           setCurrentUser(JSON.parse(user));
        }
    },[])

    useEffect(()=>{
        setNewCart((prev)=>{
            return [
                ...prev,
                ...cart.filter((el)=>el.user_id === currentUser?.id)
            ]
        })
    },[cart])


    // console.log(newCart);
    useEffect(()=>{
        setMainCart((prev)=>{
            return [
                ...prev,
                ...burgers.filter((el)=>{
                    for(let i =0;i<newCart.length;i++){
                        if(el.id == newCart[i].item){
                            return {
                                ...newCart[i]
                            }
                        }
                    }
                })
            ]
        });
    },[newCart,burgers])


    if(loading){
        return <h1 className="load">Loading ...</h1>
    }
    if(error){
        return <h1 className="load">{error}</h1>
    }


    return (
        <>
            <div className="cont cart">
                <div className="cart_grid">
                    {mainCart?.map((el) =>{
                        return <CartAbout key={el.id} {...el}/>

                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cart
