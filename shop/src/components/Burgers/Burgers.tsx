import {FC, memo} from 'react'
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';


interface props{
    id:string;
    img:string;
    name :string;
    price:string;
    view:string;
    about:string,
    selectedPage:number
}

const Burgers:FC<props> = ( {view,selectedPage,...el}) => {
    const navigate = useNavigate();
    const {fetchBurgers} = useActions();    


    function handleClick(){
        fetchBurgers(selectedPage);
        navigate(view === "store" ? el.id : "/store/" + el.id,);
    }
    return  (
    <div  className="items" onClick={handleClick}>
        <img src={el.img}/>
        <div className="item">
            <h3 className="text">{el.name}</h3>
            <p className="text">{el.about}</p>
            <p className="price">{el.price + ".00$"} </p>
        </div>
    </div>
    )
}

export default memo(Burgers)