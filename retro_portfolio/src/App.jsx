import { About } from './components/About/About'
import { CrossBars } from './components/Decoration/CrossBars'
import { Entrance } from './components/Entrance/Entrance'
import {Work} from './components/Work/Work'
import './styles.css'

export const App = () => {
  return (
    <>

      <CrossBars />
      
      <Entrance />
      <About />
      <Work/>
    
    </>
    

  )
}
