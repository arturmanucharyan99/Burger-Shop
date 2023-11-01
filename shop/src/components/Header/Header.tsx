import React, { FC, useEffect, useRef, useState } from "react";
import Images from "../../images";
import "./Header.css";

const Header: FC = () => {
  const [slider, setSlider] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevSlider) => (prevSlider === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slider * 100}vw)`;
    }
  }, [slider]);

  return (
    <div className="slider">
      <div className="slider-container" ref={sliderRef}>
        <img src={Images.header} alt="Slide 1" />
        <img src={Images.header2} alt="Slide 2" />

      </div>
      <div className="center">
        <div className="slider_text">
            <div className="deal_text" style={{backgroundImage:`url(${Images.shape})`}}>
                <span>Big Deal</span>
            </div>
            <h3>Burger <br/>
              Bachelor</h3>
            <h4>Maxican</h4>
        </div>

      </div>
    </div>
  );
};

export default Header;
