import React from 'react'
import { CrossBars } from '../Decoration/CrossBars'
import { ScrollButtons } from '../ScrollButtons/ScrollButtons'
import './entrance.css'

export const Entrance = () => {
  return (
    <section className='entrance'>
    <div className="presentation animate__animated animate__fadeInLeft">
      <h1 className='name'>DAVID <br /> DOKIC</h1>
      <div className='crossbarY'></div>
      <div className="crossbarX"></div>
      <h4>Full-Stack Developer <br /> and UX/UI Designer <br /> based in Madrid</h4>
    </div>

    <ScrollButtons/>
   
  </section>

  )
}
