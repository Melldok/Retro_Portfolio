import { useEffect, useState } from 'react'
import { About } from './components/About/About'
import { Entrance } from './components/Entrance/Entrance'
import { Footer } from './components/Footer/Footer'
import { Skills } from './components/Skills/Skills'
import {Work} from './components/Work/Work'
import { WorkMobile } from './components/Work/WorkMobile'
import './styles.css'

export const App = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);
  const [isMobile, setMobile] = useState(window.innerWidth < 600);


  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
    setMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });




  return (
    <>

    
      
      <Entrance />
      <About />
     { isDesktop && <Work/> }
      { isMobile && <WorkMobile/>}
      <Skills/>
      <Footer/>
    </>
    

  )
}
