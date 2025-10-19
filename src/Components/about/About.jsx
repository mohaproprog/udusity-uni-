import './about.css'
import about from '../Assets/about.png'
import play from '../Assets/play-icon.png'


function About() {
  return (
    <div className='about'>
      <div className="aboutLeft">
          <img src={about} alt="" />    
          <img className='playIcon' src={play} alt="" />     
      </div>
        
        <div className="aboutRight">
            <p className='titleP'>ABOUT UNIVERSITY</p>
            <h2>Nutruting Tommorow's <br /> Leaders Today</h2>
            <p>
              Our university is a vibrant community dedicated to academic excellence, innovation, and the personal growth of every student. For decades we have blended rigorous scholarship with hands-on learning to prepare graduates who lead with integrity and creativity in a rapidly changing world.
              <br /><br />
              We offer diverse undergraduate and graduate programs across the arts, sciences, and professional fields, supported by engaged faculty and modern research facilities. Internships, collaborative projects, and global partnerships give students practical experience and opportunities to make an immediate impact.
              <br /> <br />
              Campus life fosters belonging through student organizations, cultural events, and community service initiatives that cultivate leadership, resilience, and lifelong curiosity. Committed to inclusion, sustainability, and civic engagement, we prepare graduates to build a better future — locally and globally.
            </p>
        </div>
    </div>
  )
}

export default About