import {FC} from "react";
import Images from "../../images";
import "./InstaImage.css";

const  InstaImage:FC<{}> = ({}) =>{
    return (
        <div className="cont">
            <div className="insta-image">
                <div className="imgInst"><img src={Images.insta1} alt="d" /></div>
                <div className="imgInst"><img src={Images.insta2} alt="d" /></div>
                <div className="imgInst"><img src={Images.insta3} alt="d" /></div>
                <div className="imgInst"><img src={Images.insta4} alt="d" /></div>
            </div>
        </div>
    )
}

export default InstaImage
