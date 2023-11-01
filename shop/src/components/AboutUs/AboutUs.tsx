
import Images from "../../images"
import "./AboutUs.css"
import {FC} from "react"

const AboutUs:FC<{}> = ({}) => {
    return (
        <div className="cont">
            <div className="about-us">
                <div className="chefs">
                    <img src={Images.chef1}/>
                    <img className="chef" src={Images.chef2}/>
                </div>
                <div className="about-text">
                    <h4>About us</h4>
                    <h3>BEST BURGER IN YOUR CITY</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
