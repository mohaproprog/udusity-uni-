import './testimonials.css';
import nextIcon from '../Assets/next-icon.png'
import backIcon from '../Assets/back-icon.png'
import user1 from '../Assets/user-1.png';
import user2 from '../Assets/user-2.png';
import user3 from '../Assets/user-3.png';
import user4 from '../Assets/user-4.png';
import { useRef } from 'react';

function Testimonials() {
    const slider = useRef();
    let tx = 0;
    const moveBackward = ()=>{
        if (tx < 0){
            tx +=25;

        }
        slider.current.style.transform = `translateX(${tx}%)`;

        
    }
    const moveForward = ()=>{
        if (tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;


    }

    return(
    <div className="testimonials">
        <img src={backIcon} alt="" className="backArrow" onClick={moveBackward}/>
        <img src={nextIcon} alt="" className="nextArrow" onClick={moveForward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user">
                            <div className="userImg">

                            <img src={user1} alt="" />
                            <div className="userInfo">
                                <h3>Amina Noor</h3>
                                <span>Mogadishu,Somalia</span>
                            </div>
                            </div>
                            <p>The professors here are deeply committed and the curriculum balances theory with hands-on projects. My internship opportunities helped me grow professionally and personally.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user">
                            <div className="userImg">

                            <img src={user2} alt="" />
                            <div className="userInfo">
                                <h3>Ahmed Ali</h3>
                                <span>Nairobi, Kenya</span>
                            </div>
                            </div>
                            <p>The professors here are deeply committed and the curriculum balances theory with hands-on projects. My internship opportunities helped me grow professionally and personally.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user">
                            <div className="userImg">

                            <img src={user3} alt="" />
                            <div className="userInfo">
                                <h3>Samiiro Abdi</h3>
                                <span>Mombai,india</span>
                            </div>
                            </div>
                            <p>The professors here are deeply committed and the curriculum balances theory with hands-on projects. My internship opportunities helped me grow professionally and personally.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user">
                            <div className="userImg">

                            <img src={user4} alt="" />
                            <div className="userInfo">
                                <h3>Abdi Warsame</h3>
                                <span>Mogadishu,Somalia</span>
                            </div>
                            </div>
                            <p>The professors here are deeply committed and the curriculum balances theory with hands-on projects. My internship opportunities helped me grow professionally and personally.</p>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
    )
    
}

export default Testimonials;