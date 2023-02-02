import about from '../../assets/icons/about.svg'
import contact from '../../assets/icons/contact.svg'
import skills from '../../assets/icons/skills.svg'
import work from '../../assets/icons/work.svg'



import './scrollButtons.css'

export const ScrollButtons = () => {
  return (
    
    <div className='scrollButtons d-flex mb-5 animate__animated animate__fadeInDown'>

      <div className='d-flex flex-column mt-5 mx-3'>
      <a href="#about"><div className='scrollButton mb-4'> <h3>About</h3><img src={about} alt="About" /></div></a>
        <a href="#work"><div className='scrollButton mt-3'><h3>Work</h3><img src={work} alt="Work"/></div></a>
      </div>


      <div className="d-flex flex-column">
        
        <a href="#skills"><div className='scrollButton mb-4'> <h3>Skills</h3><img src={skills} alt="Skills" /></div></a>
        <a href="#contact"><div className='scrollButton mt-3'>  <h3>Contact</h3><img src={contact} alt="Contact" /></div></a>

      </div>


    
    </div>
  )
}
