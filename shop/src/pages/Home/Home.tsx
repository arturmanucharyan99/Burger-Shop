import axios from "axios"
import Header from "../../components/Header/Header"
import "./Home.css"
import {useEffect,useState,FC} from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Images from "../../images"
import AboutUs from "../../components/AboutUs/AboutUs"
import Testimonials from "../../components/Testimonials/Testimonials"
import InstaImage from "../../components/InstaImage/InstaImage"
import Footer from "../../components/Footer/Footer"
import { useTypedSelector } from "../../hooks/useTypeSelector"
import { useActions } from "../../hooks/useActions"
import Burgers from "../../components/Burgers/Burgers"

// type obj = {
//     id: number,
//     title:string,
//     src:string,
//     price:string,
//     thumbnailUrl:string
// }

const Home:FC<{}> =({  })=> {

    const navigate = useNavigate();
    const {burgers,error,loading,limit,page} = useTypedSelector(state => state.burgers);

    
    const {fetchBurgers} = useActions();
    useEffect(() => {
    
        fetchBurgers(page,limit)
    }, [])

    
    if (loading) {
        return (
            <h1 className="load">Loading ...</h1>
        )
    }

    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <>
            <div className="home">
                <h2>Burger Menu</h2>
                <h3>BEST EVER BURGERS</h3>
            </div>
                <div className="cont">
                    <div className="products">
                    {burgers.map((el)=>{
                       return <Burgers key={el.id} view="home" {...el}/>
                    })}
                    <div className="link" onClick={()=>navigate('/store')}><NavLink to="/store">More Items</NavLink></div>
                </div>
                
            </div>
            <div className="gallery">
                    <div className="picture">
                        < img src={Images.burger1}/>
                        <div className="info">
                            <span>20$</span>
                            <h2>The Burger President</h2>
                            <p >Great way to make your business appear trust and relevant.</p>
                            <div className="order">Order</div>
                        </div>
                    </div>
                    <div className="picture"> 
                        < img src={Images.burger2}/>
                        <div className="info">
                            <span>20$</span>
                            <h2>The Burger President</h2>
                            <p >Great way to make your business appear trust and relevant.</p>
                            <div className="order">Order</div>
                        </div>

                    </div>
                </div>
                <AboutUs/>
                <Testimonials/>
                <InstaImage/>
                <Footer/>
        </>
    )
}

export default Home
