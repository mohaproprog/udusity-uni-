import './Program.css'
import Program1 from '../Assets/program-1.png'
import Program2 from '../Assets/program-2.png'
import Program3 from '../Assets/program-3.png'

const Program = () => {
  return (
    <div className="program">
        <div className="img">
            <img src={Program1} alt="" />
            <img src={Program2} alt="" />
            <img src={Program3} alt="" />
            
        </div>
    </div>
  )
}

export default Program;