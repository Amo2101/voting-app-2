import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/main.css";

function Navbar(){
    const navRef = useRef();
    const showNavbar= ()=>{
        navRef.current.classList.toggle("responsive_nav");
    };

    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
      }

return(
   
<header>


<h3>
    Elections 2023
</h3>

<nav ref={navRef} >



    <a href="/">Home</a>
    <a href="#">Vote</a>
    <a href="#">Privacy</a>
    <a href="/form">login/Register</a>

    

    <button className='nav-btn nav-close-btn' onClick={hideNavbar}>
<FaTimes></FaTimes>
    </button>
</nav>

<button className='nav-btn '  onClick={showNavbar}>
    <FaBars></FaBars>
</button>



</header>);
};
export default Navbar;