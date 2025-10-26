import './Hero.css'
import Button from '../SmallComponents/Button.jsx';
import Arrow from '../Assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero">
        <div className="heroText">
            <h2>We Ensure Better Education <br />For a Better World</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Veniam ullam enim officiis vel <br />
            soluta deserunt magni in eos quas praesentium!</p>
        
        <Button text={"Explore More"} img={<img src={Arrow} />}/>
        </div>

    </div>
  )
}

export default Hero