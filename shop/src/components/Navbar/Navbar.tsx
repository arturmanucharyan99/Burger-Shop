import {Outlet,NavLink} from "react-router-dom"
import "./Navbar.css"
import Header from "../Header/Header";
import React, { useEffect, useState,FC } from 'react';
import NewNavbar from "../NewNavbar/NewNavbar";


const Navbar:FC<{}> = () => {

    return (
      <>
        <header>
            <NewNavbar color="white"/>
        </header>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Navbar

