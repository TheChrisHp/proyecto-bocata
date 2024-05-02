import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const Mailing = () =>{
    const images = [
        {
          original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878530464055306/img70.jpg?ex=6633a0db&is=66324f5b&hm=8268cb76d29b659142935952ea67b6df9882817d7a10020ef32d22efb1e1173a&=&format=webp&width=875&height=671',
          thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878530464055306/img70.jpg?ex=6633a0db&is=66324f5b&hm=8268cb76d29b659142935952ea67b6df9882817d7a10020ef32d22efb1e1173a&=&format=webp&width=875&height=671',
        },
        {
          original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878530740748378/img74.jpg?ex=6633a0db&is=66324f5b&hm=4a119a7c2cacf0c92eeede215c4d654153b57acc00a16212ffc3de26896419c5&=&format=webp&width=875&height=671',
          thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878530740748378/img74.jpg?ex=6633a0db&is=66324f5b&hm=4a119a7c2cacf0c92eeede215c4d654153b57acc00a16212ffc3de26896419c5&=&format=webp&width=875&height=671',
        },
        {
          original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878531286138880/img82.jpg?ex=6633a0db&is=66324f5b&hm=335ac633cd0ba1a55c2c08426f125667019aa28e7f0f498334edef31dfaefc55&=&format=webp&width=875&height=671',
          thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878531286138880/img82.jpg?ex=6633a0db&is=66324f5b&hm=335ac633cd0ba1a55c2c08426f125667019aa28e7f0f498334edef31dfaefc55&=&format=webp&width=875&height=671',
        },
        {
          original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878531827204136/img48.jpg?ex=6633a0db&is=66324f5b&hm=0ae828e0d73e2b6114860f82add293fb6a94ae10914691b5b260dcbd0bf748e9&=&format=webp&width=875&height=671',
          thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878531827204136/img48.jpg?ex=6633a0db&is=66324f5b&hm=0ae828e0d73e2b6114860f82add293fb6a94ae10914691b5b260dcbd0bf748e9&=&format=webp&width=875&height=671',
        },
        {
            original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878532523458640/img58.jpg?ex=6633a0db&is=66324f5b&hm=5972f2e450bb6f59660709b0f3deabd2dd5414b80c3e72bfd879093ff84685c7&=&format=webp&width=875&height=671',
            thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878532523458640/img58.jpg?ex=6633a0db&is=66324f5b&hm=5972f2e450bb6f59660709b0f3deabd2dd5414b80c3e72bfd879093ff84685c7&=&format=webp&width=875&height=671',
        },
        {
            original: 'https://media.discordapp.net/attachments/1228542950636781569/1232878532821123104/img62.jpg?ex=6633a0dc&is=66324f5c&hm=fd03950417b1013935dc3159150d747dd25c279e838b0953861f164c2cfbbdac&=&format=webp&width=875&height=671',
            thumbnail: 'https://media.discordapp.net/attachments/1228542950636781569/1232878532821123104/img62.jpg?ex=6633a0dc&is=66324f5c&hm=fd03950417b1013935dc3159150d747dd25c279e838b0953861f164c2cfbbdac&=&format=webp&width=875&height=671',
        },
      ];

    return(
    <>
        <div className="background-mailing">
        </div>
        <div className="main-mailing">
            {/* <h1>¡TENEMOS NUEVO <span style={{background:"red", color: "white"}}>MAILING!</span></h1> */}
        </div>

<section className="carousel-mailing">
    <div className='h1-mailing'>
    <h1>Observa nuestras increibles <span style={{background:"red", color: "white"}}>OFERTAS</span></h1>
    <p>No olvides consultar nuestro MAILING que tenemos las mejores ofertas para vos, precios <span style={{textDecoration:"underline"}}>MUY BAJOS</span> y OFERTAS <span style={{textDecoration:"underline"}}>IMPERDIBLES</span>.
    Tampoco te pierdas de nuestros IMBATIBLES:
    </p>
    <button className='boton-imperdible'>
        Ver IMBATIBLES
    </button>
    </div>
    <img className='draw-4' src="./resources/draw-4.svg" alt="draw 4" />
    <svg className='svg-mailing' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#c70000" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,128C672,128,768,96,864,101.3C960,107,1056,149,1152,138.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <ImageGallery items={images} />
</section>

<section className='section-ingresar-mailing'>
    <div>
        <h1>PARA CONSULTAR NUESTRO MAILING COMPLETO <span style={{background: 'red', color: "white"}}>INGRESA</span>
        ➡️
        <a className="link-mailing" href="">AQUÍ</a>
        </h1>
    </div>
</section>

<section className='cont-dudas-contacto-mailing'>
    <div className='encabezado-dudas-mailing'>
        <h1>¿Dudas?</h1>
    </div>
</section>

<div className='cont-contactarnos'>
    <div className='contactarnos'>
        <h1>Por cualquier consulta no olvides contactarnos</h1>
        <p>Estamos para resolver cualquiera de sus dudas, si tiene alguna queja/problema o solicitud no olvide escribirnos y nos pondremos en contacto con usted a la brevedad. Al igual que si quiere postularse por una oportunidad laboral estamos dispuestos a recibir su CV y en caso de que quede seleccionado contactarnos con usted. Bocata, nuestro compromiso es contigo.</p>
        <button>Contáctanos</button>
        <button>Envíar CV</button>
    </div>
    <div className='cont-draw'>
        <img src="./resources/draw-6.svg" alt="" />
    </div>
</div>
</>


);}
    


export default Mailing;