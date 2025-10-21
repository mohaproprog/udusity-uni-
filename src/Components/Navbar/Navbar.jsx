import './Navbar.css'
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
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <Button text={"Contact us"}/>
        </ul>
        
        </div>
    </nav>
  )
}

export default Navbar