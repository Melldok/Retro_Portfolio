import React from 'react'
import { ScrollButtons } from '../ScrollButtons/ScrollButtons'
import './entrance.css'

export const Entrance = () => {
  return (
    <section className='entrance'>
    <div className="presentation">
      <h1 className='name'>DAVID <br /> DOKIC</h1>
      <h4>Full-Stack Developer <br /> and UX/UI Designer <br /> based in Madrid</h4>
    </div>
    <ScrollButtons/>
  </section>

  )
}
