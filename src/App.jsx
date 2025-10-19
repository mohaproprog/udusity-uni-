import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import Hero from './Components/hero/Hero.jsx';
import Program from './Components/Program/Program.jsx';
import Title from './Components/title/Title.jsx';
import About from './Components/about/About.jsx';
import Gallery from './Components/gallery/Gallery.jsx';
import Testimonials from './Components/testimonials/Testimonials.jsx';
import Contact from './Components/contact/Contact.jsx';
import Footer from './Components/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title title="OUR PROGRAM" subtitle=" What We Offer"/>
        <Program/>
        <About/>
        <Title title="GARLLERY" subtitle=" Compus Photos"/>
        <Gallery/>
        <Title title="TESTIMONIALS" subtitle=" What Student Says"/>
        <Testimonials/>
        <Title title="CONTACT US" subtitle=" Get In Touch"/>
        <Contact/>
        <Footer/>

      </div>
      
    </div>
  )
}

export default App;