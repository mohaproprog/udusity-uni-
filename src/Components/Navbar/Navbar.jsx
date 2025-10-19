import './Navbar.css'
import Logo from '../Assets/logo.png' // Import the logo image
import Button from '../SmallComponents/Button.jsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY >= 60 ? setSticky(true): setSticky(false);
    })
  },[])
  return (
    <div className={sticky? "sticky": "Navbar"}>
        <img src={Logo} alt="" className="logo" />
        <div className="navList">
            <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
        </ul>
        <Button text={"Contact us"}/>
        </div>
    </div>
  )
}

export default Navbar