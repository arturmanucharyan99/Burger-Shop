import {FC,useEffect, useState,memo} from "react";
import NewNavbar from "../NewNavbar/NewNavbar";
import Footer from "../Footer/Footer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./Uniq.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";


interface ForBurgers {
    id:number,
    name:string,
    price:number,
    about:string,
    img:string
}
interface ForUser {
    id:number,
    email:string,
    password:string,
    username:string
}
const Uniq:FC = ({}) => {
    const {id} = useParams();
    // const id = id;
    // const {id,name,img,price,about} = state;
    const {fetchBurgers} = useActions();
    const {burgers,loading,error} = useTypedSelector(state => state.burgers)
    const [amount,setAmount] = useState<number>(1);
    const {card} = useActions();
    const navigate = useNavigate();
    const [burger,setBurger] = useState<ForBurgers | null>(null);
    const [currentUser,setCurrentUser] =  useState<ForUser | null>(null)
    
    useEffect(()=>{
        console.log('wefwf');
        
    })

    useEffect(()=>{
        fetchBurgers();
        const user = localStorage.getItem('currentUser');
        if(window && user){
            setCurrentUser(JSON.parse(user));
        }
    },[])

    useEffect(()=>{
        setBurger((prev =>{
            return {
                ...burgers.find((el => el.id == id))
            }
        }));
    },[burgers])


    function handleAmount(type:string){
        setAmount((prev) => {
            if (type === "+" ) {
                return prev + 1;
            } else if (prev > 1) {
                return prev - 1;
            }

            return 1;
        })
    }


    function post(){
        card(Number(currentUser?.id),Number(id));
    }
    

    return (
        <>  
            <NewNavbar color="black"/>
            {/* <Header/> */}
            <div className="cont">
                <div className="uniq_grid">
                    <div className="uniq-img">
                        <img src={burger?.img} alt="burger" />
                    </div>
                    <div className="uniq-info">
                        <h2>{burger?.name}</h2>
                        <p>{burger?.about}</p>
                        <div className="info">
                            <div className="buttons">
                                <button onClick={(e)=>handleAmount("+")} className="sameButton">+</button>
                                <span>{amount}</span>
                                <button onClick={(e)=>handleAmount("-")} className="sameButton">-</button>
                            </div>
                            <div className="buy-price">
                                <button onClick={(e) => navigate('buy')} className="sameButton">{burger?.price}.00$</button>
                            </div>
                        </div>
                        <div className="cart-buy">
                            <button onClick={(e) => post()} className="sameButton">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                    height="32" 
                                    viewBox="0 -960 960 960"
                                    width="32"
                                    fill="white"
                                    >
                                    
                                    <path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default memo(Uniq)
