import {FC, useState} from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import "./About.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import InstaImage from "../../components/InstaImage/InstaImage";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";


const About:FC = ({  }) => {


    return (
        <>
            <AboutUs/>
            <Modal  name="galllery1"/>
            
            <Testimonials/>
            <InstaImage/>
            <Footer/>
        </>
    )
}

export default About
