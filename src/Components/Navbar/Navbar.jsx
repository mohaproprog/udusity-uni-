import './Navbar.css'
import { Link, Element } from 'react-scroll';
import Logo from '../Assets/logo.png' // Import the logo image
import menu from '../Assets/menu-icon.png' // Import the logo image
import Button from '../SmallComponents/Button.jsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  const [showToggle,setShowToggle] = useState(false);

  // menu--toggle
  function showToggleHandlwe(){
    if (!showToggle){
      setShowToggle(true);
    }
    else{
      setShowToggle(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY >= 60 ? setSticky(true): setSticky(false);
    })
  },[])
  return (
    <nav className={sticky? "sticky": "Navbar"}>
        <img src={Logo} alt="" className="logo" />
        
        <div className='navList'>
          <img className='menu' src={menu} alt="" onClick={showToggleHandlwe} />
            <ul className={showToggle? "showToggleNav" : ""}>
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} duration={500} offset={-240}>Program</Link></li>
            <li><Link to="about" smooth={true} duration={500} offset={-100}>About us</Link></li>
            <li><Link to="gallery" smooth={true} duration={500} offset={-190}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
            <button className=''><Link to="contact" smooth={true} duration={500}>Contact</Link></button>
        </ul>
        
        </div>
    </nav>
  )
}

export default Navbar