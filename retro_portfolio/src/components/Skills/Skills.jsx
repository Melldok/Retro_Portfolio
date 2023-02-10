
import designer from '../../assets/icons/designer.svg'
import deceloper from '../../assets/icons/deceloper.svg'
import learner from '../../assets/icons/learner.svg'

import './skills.css'
export const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h2>My Skills</h2>
        <div className="containerWidth">
        <div className="skilltabs animate__animated animate__fadeInDown">
            <div className="skilltab">
                <h5 className='mb-3'>Designer</h5>
                <img src={designer} alt="designerIcon" className='mb-3'/>
                <p> I value intuitive interfaces, clean designs and fresh perspectives.</p>
                <strong>Things I enjoy:</strong><br /><br />
                <p>Research, app and mobile design, UI.</p>
                <strong>Design tools:</strong> <br /> <br />
                <p>
                    Mockup <br />
                    Figma <br />
                    Whimscal <br />
                    Zeplin <br />
                    Pen & Paper  <br />
                    WordPress <br />
                    Elementor <br />
                    Adobe
                </p>
            </div>
            <div className="skilltab">
                <h5 className='mb-3'>Developer</h5>
                <img src={deceloper} alt="designerIcon" className='mb-3'/>
                <p> I like problem solving, information architecture, intelligent design and clean code</p>
                <strong>Languages I love</strong><br /><br />
                <p>Javascript, Python</p>
                <strong>Dev Tools:</strong> <br /> <br />
                <p>
                    Github <br />
                    React <br />
                    Typescript <br />
                    Postman <br />
                    Bootstrap <br />
                    Tailwind <br />
                    Node.js  <br />
                   
                </p>
         
            </div>
            <div className="skilltab">
                <h3 className='mb-3'>Learner</h3>
                <img src={learner} alt="designerIcon" className='mb-3'/>
                <p> I was born curious, I just love learning new things and I am always up for a challenge.</p>
                <strong>Things I want to focus on:</strong><br /><br />
                <p>Object Oriented Programming, computer science</p>
                <strong>Design tools:</strong> <br /> <br />
                <p>
                    Mockup <br />
                    Figma <br />
                    Whimscal <br />
                    Zeplin <br />
                    Pen & Paper  <br />
                    WordPress <br />
                    Elementor <br />
                    Adobe
                </p>
            </div>
        </div>
      
        </div>
    </div>
  )
}
