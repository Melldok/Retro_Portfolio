
import './footer.css'

export const Footer = () => {
  return (
    <footer id="contact">
        <div className='containerWidth d-flex flex-column animate__animated animate__fadeInUp'>
        <h2 className='mb-3'>Get in Touch</h2>
        <p> Currently I am working as a Front End Developer for a company that uses AI for making art, but I am open for new opportunitties that allow me to grow more and learn new things! </p>
        </div>

       <a href="mailto:hello@daviddokic.com"><button className='buttonOnDark animate__animated animate__fadeInUp'>Say hi!</button></a> 

       <p className='designedBy'>Designed & built by David Dokic</p>
    </footer>
  )
}
