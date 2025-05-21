import './Aboutus.css';
import mackenzie from '../assets/image/mackenzie.png'
import natanael from '../assets/image/natanael.png'

function AboutUs() {
  return (
    
      <section id="about">
        <div className='contenedor-about'></div>
        <h2>AboutUs</h2>
        <h3>Conoce al equipo detras de la magia</h3>
        
        <p className='descripcion'>
        We're a passionate duo of web developers committed to creating beautiful, functional websites that help<br></br>
        businesses thrive in the digital landscape. With our combined expertise in design and development, we<br></br>
        deliver solutions that not only look great but also perform exceptionally.
        </p>

        <div className='team'>
          <div className='member'>
            <a href="./error">
            <img src={mackenzie} alt="mackenzie" />
            </a>
            <h4>Mackenzie kioko</h4>
            <p>Estudiante de Frontend Developer</p>
          </div>

          <div className='member'>
            <a href="./error">
            <img src={natanael} alt="Natanael" />
            </a>
            <h4>Natanael</h4>
            <p>Estudiante de Frontend Developer</p>
          </div>
        </div>

      </section>
    
  );
}

export default AboutUs;
