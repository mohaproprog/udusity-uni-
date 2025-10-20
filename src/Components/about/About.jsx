import './about.css'
import about from '../Assets/about.png'
import play from '../Assets/play-icon.png'
import playVedio from '../Assets/vedioPlay.mp4';
import { useRef, useState } from 'react';


function About() {
    const videoRef = useRef(null);
    const videoParentRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayToggle() {
    if (!isPlaying) {
      videoRef.current.play();
      videoRef.current.style.display = "block";
      setIsPlaying(true);
      videoParentRef.current.style.display = "block";
    }
  }
  function videoPause(){
    setIsPlaying(false);
    videoRef.current.style.display = "none";
    videoRef.current.pause();
    videoParentRef.current.style.display = "none";


  }

  return (
    <div className='about'>
      <div className="aboutLeft">
        <div className="leftImg">
          <img src={about} alt="" />
          <img className='playIcon' src={play} alt="Play" onClick={handlePlayToggle} />
          
        </div>
      </div>
      <div className="videoPlay" onClick={videoPause} ref={videoParentRef} style={{ display: 'none' }}>
        <video
            ref={videoRef}
            src={playVedio}
            className="aboutVideo"
            preload="metadata"
            style={{ display: 'none' }} /* show/hide as you prefer */
          />
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