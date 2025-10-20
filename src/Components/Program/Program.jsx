import './program.css'
import Program1 from '../Assets/program-1.png'
import Program2 from '../Assets/program-2.png'
import Program3 from '../Assets/program-3.png'

// hover images
import hover1 from '../Assets/program-icon-1.png';
import hover2 from '../Assets/program-icon-2.png';
import hover3 from '../Assets/program-icon-3.png';

const Program = () => {
  return (
    <div className="program">
        <div className="img">
          <div className="progImg">

            <img src={Program1} alt="" />
            <div className="imgHover">
              <img  src={hover1} alt="" />
            </div>
          </div>
          <div className="progImg">

            <img src={Program2} alt="" />
            <div className="imgHover">
              <img  src={hover2} alt="" />
            </div>
          </div>
          <div className="progImg">

            <img src={Program3} alt="" />
            <div className="imgHover">
              <img  src={hover3} alt="" />
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Program;