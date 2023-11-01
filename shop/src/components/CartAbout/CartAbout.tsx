import {FC,memo} from 'react'
import { useNavigate } from 'react-router-dom'

interface props{
    id:number,
    name:string,
    img:string,
    about:string,
    price:number
}


const  CartAbout:FC<props> = ({...el}) => {
    const navigate = useNavigate();

  return (
    <div className="cart-product" onClick={(e) => navigate("/store/" + el.id,{state:{...el}} )}>
        <div>
            <h2>{el.name}</h2>
        </div>
        <div>
            <img src={el.img} alt="" />
        </div>
        <div className="cart-info">
            <p>{el.about}</p>
            <span>{el.price}.00$</span>
        </div>
    </div>
  )
}

export default memo(CartAbout)