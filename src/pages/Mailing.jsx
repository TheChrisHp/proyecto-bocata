import { Helmet } from 'react-helmet';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { HashLink as Link } from 'react-router-hash-link';


const Mailing = () =>{
    const images = [
        {
          original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697280/samples/bocata-imgs/img48_fjgcoe.jpg',
          thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697280/samples/bocata-imgs/img48_fjgcoe.jpg',
        },
        {
          original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697281/samples/bocata-imgs/img54_o86a2z.jpg',
          thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697281/samples/bocata-imgs/img54_o86a2z.jpg',
        },
        {
          original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697283/samples/bocata-imgs/img58_h2lzg2.jpg',
          thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697283/samples/bocata-imgs/img58_h2lzg2.jpg',
        },
        {
          original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697284/samples/bocata-imgs/img62_yyxbc5.jpg',
          thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697284/samples/bocata-imgs/img62_yyxbc5.jpg',
        },
        {
            original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697286/samples/bocata-imgs/img66_smeorc.jpg',
            thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697286/samples/bocata-imgs/img66_smeorc.jpg',
        },
        {
            original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697287/samples/bocata-imgs/img70_pxerlv.jpg',
            thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714697287/samples/bocata-imgs/img70_pxerlv.jpg',
        },
      ];

    return(
    <body className='fondo-mailing'>
        <Helmet>
            <title>Supermercado Bocata | Mailing</title>
        </Helmet>
        <div className="cont-background-mailing">
            <img src="https://res.cloudinary.com/dfnton7oq/image/upload/v1715971266/samples/bocata-imgs/434601893_814535467370693_6833600161098087434_n_rqx3su_pdxuno.jpg" alt="" />
        </div>
        <div className="main-mailing">
            
        </div>

<section className="carousel-mailing d-flex flex-wrap" id='mailing-carou'>
    <div className='h1-mailing text-md-left m-0'>
    <h1 className='text-md-left'>Observa nuestras increibles <span style={{background:"red", color: "white"}}>OFERTAS</span></h1>
    <p>No olvides consultar nuestro MAILING que tenemos las mejores ofertas para vos, precios <span style={{textDecoration:"underline"}}>MUY BAJOS</span> y OFERTAS <span style={{textDecoration:"underline"}}>IMPERDIBLES</span>.
    Tampoco te pierdas de nuestros IMBATIBLES:
    </p>
    <Link to='/Inicio#imb'>
    <button className='boton-imbatible m-0'>
        Ver IMBATIBLES
    </button>
    </Link>
    </div>
    <img className='draw-4' src="./resources/draw-4.svg" alt="draw 4" />
    <svg className='svg-mailing' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#c70000" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,74.7C384,96,480,128,576,128C672,128,768,96,864,101.3C960,107,1056,149,1152,138.7C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <ImageGallery items={images} />
</section>

<section className='section-ingresar-mailing'>
    <div>
        <h1 className='text-center text-md-left'>PARA CONSULTAR NUESTRO MAILING COMPLETO <span style={{background: 'red', color: "white"}}>DESCARGA</span>
        ➡️
        <a className="link-mailing" href="./resources/mailing-bocata-d.pdf" download="mailing-bocata-d.pdf">AQUÍ</a>
        </h1>
    </div>
</section>

<section className='cont-dudas-contacto-mailing'>
    <div className='encabezado-dudas-mailing'>
        <h1 className='text-center text-md-left'>¿Dudas?</h1>
    </div>
</section>

<div className='cont-contactarnos d-flex flex-wrap'>
    <div className='contactarnos m-0'>
        <h1 className='m-0 text-sm-start'>Por cualquier consulta no olvides contactarnos</h1>
        <p className='text-sm-start'>Estamos para resolver cualquiera de sus dudas, si tiene alguna queja/problema o solicitud no olvide escribirnos y nos pondremos en contacto con usted a la brevedad. Al igual que si quiere postularse por una oportunidad laboral estamos dispuestos a recibir su CV y en caso de que quede seleccionado contactarnos con usted. Bocata, nuestro compromiso es contigo.</p>
        <Link to='/contacto'>
        <button>Contáctanos</button>
        </Link>
        <Link to='/postulate'>
        <button>Envíar CV</button>
        </Link>
    </div>
    <div className='cont-draw'>
        <img className='img-fluid' src="./resources/draw-6.svg" alt="" />
    </div>
</div>
</body>


);}
    


export default Mailing;