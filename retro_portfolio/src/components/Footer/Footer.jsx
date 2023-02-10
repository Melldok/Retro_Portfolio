
import './footer.css'

export const Footer = () => {
  return (
    <footer id="contact">
        <div className='containerWidth d-flex flex-column animate__animated animate__fadeInUp'>
        <h2 className='mb-3'>Get in Touch</h2>
        <p> I am currently looking for job opportunities that allow me to develop as a professional. You can contact me here! </p>
        </div>

       <a href="mailto:hello@daviddokic.com"><button className='buttonOnDark animate__animated animate__fadeInUp'>Say hi!</button></a> 

       <p className='designedBy'>Designed & built by David Dokic</p>
    </footer>
  )
}
