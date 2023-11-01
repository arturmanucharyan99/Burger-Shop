import {FC, useEffect, useState} from 'react'
import "./NewNavbar.css"
import { NavLink, useNavigate } from 'react-router-dom'
import Images from '../../images';

interface props{
    color:string;
}

const  NewNavbar:FC<props> = ({color}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [currentUser,setCurrentUser] = useState<null | object>(null);
    const navigate = useNavigate();
  

    useEffect(()=>{
      const user = localStorage.getItem('currentUser');
      if(window && user){
        const mainUser = JSON.parse(user);
        setCurrentUser(mainUser);
      } else { 
        navigate('/login');
      }
      
  },[])

  
  
    const styleNavbar:object = {
        backgroundColor:isScrolled ? "black" : "", 
        position:isScrolled ? "fixed" : "absolute",
        width:"100%"
    }

    const styleDropdown:object = {
        backgroundColor : isScrolled ? "black" : "",
        
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useEffect(()=>{
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 150) {
              setIsScrolled(true);
            } else {
              setIsScrolled(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])


    function handleLogOut(){
      localStorage.removeItem('currentUser');
      navigate('./login');
    }

  return (
    <nav className="navbar" style={styleNavbar}>
    <div className="navbar-logo">
        <NavLink to="/home"><img src={Images.logo} alt="Logo"/></NavLink>
    </div>
    <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><NavLink  to="/home">Home</NavLink></li>
        <li><NavLink  to="/about">About</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li  className='logout' onClick={handleLogOut}>Log out</li>
    </ul>
    
    <div  className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
      {isMenuOpen && <div id="dropdown" style={styleDropdown}>
        <ul className="dropdownList">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/store">Store</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li  className='logout' onClick={handleLogOut}>Log out</li>
        </ul>
      </div>}
        <span ></span>
        <span ></span>
        <span ></span>
    </div>
</nav>
  )
}

export default NewNavbar