import { About } from './components/About/About'
import { CrossBars } from './components/Decoration/CrossBars'
import { Entrance } from './components/Entrance/Entrance'
import { ScrollButtons } from './components/ScrollButtons/ScrollButtons'
import './styles.css'

export const App = () => {
  return (
    <>

      <CrossBars />
      
      <Entrance />
      <About />
    
    </>
    

  )
}