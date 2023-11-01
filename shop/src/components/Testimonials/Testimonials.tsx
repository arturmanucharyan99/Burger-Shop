import {FC} from "react"
import "./Testimonials.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Images from "../../images";




const  Testimonials :FC<{}> = ({}) =>{
    return (
        <>
    <div className="cont">
        <div className="testimonials">
            <h4>Testimonials</h4>
            <h3>HAPPY CUSTOMERS</h3>
        </div>
        <div className="testimonials-comments">
           
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="comments">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo provident ut praesentium atque quia! Quisquam eius ea, commodi ducimus ipsum vero placeat reprehenderit aliquam at voluptate earum, dolor nam inventore!</p>    
                    <img src={Images.comment_1} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="comments">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo provident ut praesentium atque quia! Quisquam eius ea, commodi ducimus ipsum vero placeat reprehenderit aliquam at voluptate earum, dolor nam inventore!</p>    
                    <img src={Images.comment_2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="comments">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo provident ut praesentium atque quia! Quisquam eius ea, commodi ducimus ipsum vero placeat reprehenderit aliquam at voluptate earum, dolor nam inventore!</p>    
                    <img src={Images.comment_3} alt="" />
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
    </div>
        </>
    )
}

export default Testimonials
