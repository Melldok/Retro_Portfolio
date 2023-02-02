import './about.css'
import me from '../../assets/images/me.jpg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'


export const About = () => {
  return (
    
    
    <section className='about' id='about'>
      <div className="containerWidth">
      <div className='col-6'>
        <h2 className='mb-5'>About Me</h2>
        <p>
        Hey! I am David.  <br /> <br />

        I used to be a chef and travel the world working with the F1 Team. I met some amazing people and learned the power of creativity and analytical thinking with methodical workflows. <br /> <br />
        
        My final project for cooking school was about the digitalization of restaurants, because I was always around computers. 2020 was the turning point. I helped some friends to launch their digital businesses and I fell in love with the feeling of fabricating ideas without physical barriers. <br /> <br />

        I enrolled on a six month full stack and UX/UI intensive bootcamp that catapulted me. I became hungry for more so I joined the CS50 computer science Harvard course and codecademy's Full Stack Engineer path. I haven't stopped growing since then!  <br /><br />

        Technologies i have been working with recently: <br /><br />
        
        </p>
        <ol className='stack'>
          <li><p>Javascript (ES6+)</p></li>
          <li><p>React</p></li>
          <li><p>Node.js</p></li>
          <li><p>Express.js</p></li>
          <li><p>Mongo</p></li>
          <li><p>Python</p></li>
        </ol>
        

       
     </div> 

     <div>
        <img className='profilePicture' src={me} alt="" />
        <div className="d-flex mt-4">
          <a className='socialIcon' href="https://github.com/Melldok" target="_blank"><img src={github} alt="" /></a>
          <a className='socialIcon' href="https://www.linkedin.com/in/david-dokic-lazinica-11981a230/" target="_blank"><img src={linkedin} alt="" /></a>
        </div>
     </div>
      </div>


     
    </section>


  )
}
