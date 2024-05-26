import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Demo from './components/carousel';

const Inicio = () => {


  const images = [
    {
      original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702024/samples/bocata-imgs/438810794_828546232636283_4185671170793695186_n_x7jmpb.jpg',
      thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702024/samples/bocata-imgs/438810794_828546232636283_4185671170793695186_n_x7jmpb.jpg',
    },
    {
      original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702029/samples/bocata-imgs/440461280_828546205969619_8759338839988000312_n_byo2sg.jpg',
      thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702029/samples/bocata-imgs/440461280_828546205969619_8759338839988000312_n_byo2sg.jpg',
    },
    {
      original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702032/samples/bocata-imgs/440608246_828546189302954_3072576586392460864_n_fz5bls.jpg',
      thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702032/samples/bocata-imgs/440608246_828546189302954_3072576586392460864_n_fz5bls.jpg',
    },
    {
      original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702190/samples/bocata-imgs/440582793_828546275969612_9130431802598810874_n_eieuod.jpg',
      thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702190/samples/bocata-imgs/440582793_828546275969612_9130431802598810874_n_eieuod.jpg',
    },
    {
        original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702193/samples/bocata-imgs/440603227_828546209302952_5076674115198934613_n_z60z5k.jpg',
        thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714702193/samples/bocata-imgs/440603227_828546209302952_5076674115198934613_n_z60z5k.jpg',
    },
    {
        original: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714786339/samples/bocata-imgs/438796070_828546235969616_3451252564851151997_n_aiz3j3.jpg',
        thumbnail: 'https://res.cloudinary.com/dfnton7oq/image/upload/v1714786339/samples/bocata-imgs/438796070_828546235969616_3451252564851151997_n_aiz3j3.jpg',
    },
  ];

  return (
    <>
    <Helmet>
      <title>Supermercado Bocata | Inicio</title>
      <meta name="description" content='Supermercado Bocata | Horarios: de 8:00 a 22:30 hs, todos los días de la semana. (Abierto domingos). ubicacion. Av. 8 de octubre 4130, esq. Pascual Paladino. telefono.'></meta>
      <meta name='keywords' content='supermercado uy, super, supermercado, los mejores precios, imbatibles, precios imbatibles, mejores precios, Supermercado Bocata, Bocata'></meta>
    </Helmet>
        <div className='cont-carousel'>
        <Demo></Demo>
        </div>      
      <main>
        <section className="cont-texto">
        <h1>Si elegis Supermercado, elegís <span style={{color: "#D40000"}}>Bocata</span></h1>
        <p>Nuestro compromiso es contigo.</p>
        </section>
        <img src="https://res.cloudinary.com/dfnton7oq/image/upload/v1714699203/samples/bocata-imgs/bocata-logo_wlktwj.png" alt="" />
      </main>

      <section className='section-2'>
      <div className="img-bocata-p">
        <h1>IMBATIBLES</h1>
      </div>
    </section>

  <div className='cont-imbatibles'>

<svg className='svg-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#c70000" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,272C672,256,768,192,864,144C960,96,1056,64,1152,64C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg>
    
    <section className='s-imbatibles' id='imb'>
      <h1><span>NO</span> te pierdas de los precios <span style={{color: "white", backgroundColor:"red"}}>¡IMBATIBLES!</span></h1>
    </section>
    <img className='img-promocion' src="/assets/descuento.png" alt="promocion-imagen" />
    </div>

    {/* CARROUSEL 2 */}
      <div className="cont-carrousel2">
      <svg className='svg-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#c70000" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,101.3C480,107,549,149,617,160C685.7,171,754,149,823,122.7C891.4,96,960,64,1029,85.3C1097.1,107,1166,181,1234,181.3C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </svg>
        <ImageGallery items={images} />
      </div>
      <div className='cont-btn-carrou-2'>
        <Link to="https://www.facebook.com/100064427420227/posts/pfbid033sTFjhWZgu2oEZ387Kdk557Udps9xHXJqWYqbRPK3KuedNStDDJs1WgJ1ii9jNhCl/">
        <button> 🔥 ¡Ver todos los IMBATIBLES! 🔥</button>
        </Link>
      </div>
    
    <section className='cont-ubicados' id='mapa-ubicacion'>
      <h1>¿DÓNDE NOS <span style={{color:"white", backgroundColor:"red"}}>ENCONTRAMOS?</span></h1>
    </section>
    
    <div className="ubicados">
      <iframe style={{border:"solid 2px #000", borderRadius:"10px", boxShadow:"2px 2px 2px 0px #f90000"}} className='mapa-iframe-ubicacion' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4474581258214!2d-56.137374423520285!3d-34.87010857161695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f80c0441d1e2d%3A0x503c860aa30d8a2d!2sSupermercado%20Bocata!5e0!3m2!1ses-419!2suy!4v1714187476144!5m2!1ses-419!2suy" width="650" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className='ubicados-aside'>
        <h1>Estamos ubicados en 8 de Octubre 4130
          esq. Pascual Paladino.
        </h1>
        <img className='draw-1' src="./assets/draw-1.svg" alt="draw-1-ubicacion" />
        <h1 className='h1-esperamos'>¡Te esperamos!, no olvides consultar nuestro <span style={{background:"red", color:"white"}}>MAILING</span></h1>
        <Link to="/mailing#mailing-carou">
          <button className='btn-mailing'>Ver Mailing</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Inicio;