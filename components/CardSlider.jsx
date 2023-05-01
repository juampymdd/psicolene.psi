
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div key="1" className="item card" data-value="1"><p className='texto-slider'>¡Hola! Soy <b>Marlene Scheider Móttola</b>, psicóloga cognitivo conductual. Me dedico a ofrecer terapia en línea a pacientes de todo el mundo. La terapia puede ayudar a las personas a superar los desafíos y dificultades que enfrentan en sus vidas. Desde este enfoque, podemos trabajar para ayudarte a identificar patrones de pensamiento y comportamiento que pueden estar limitando tu vida, y desarrollar habilidades y estrategias para lograr tus objetivos de forma satisfactoria. Si estás buscando apoyo y/o ayuda para mejorar tu bienestar mental y emocional, estoy aquí para ayudarte</p></div>,
    <div key="2" className="item card" data-value="2"><p className='texto-slider'>Si estás buscando contenido útil y práctico para mejorar tu bienestar emocional, asegúrate de seguir mi cuenta de Instagram. En ella, publico información valiosa sobre diferentes afecciones y temas relacionados con la salud mental, desde la ansiedad y la depresión hasta el estrés y las relaciones interpersonales. Con mis publicaciones, puedes obtener herramientas y recursos para superar los desafíos y dificultades que enfrentas en tu vida. ¡No pierdas la oportunidad de mejorar tu bienestar emocional y ser parte de mi comunidad! ¡Te espero en mi perfil de <a href='https://www.instagram.com/psicolene.psi/' target='_blank'>Instagram</a>!</p></div>,
];


export const CardSlider = () => {
  return (
    <div className='slider-container'>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={100000}
        animationDuration={500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        items={items}
        mouseTracking
        zIndex={1}
    />
    </div>
    
  )
}

