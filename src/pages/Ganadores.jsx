import { Helmet } from "react-helmet";
import { useState, useRef } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const ganadores = () =>{

    const [imagenActual, setImagenActual] = useState('https://res.cloudinary.com/dfnton7oq/image/upload/v1714844115/samples/bocata-imgs/ganador-sorteo-1_n4pgwt.png');
    const [botonActivo, setBoton] = useState('primero');
    const imgRef = useRef(null);

    const mostrarImg = (imagen, id) => {
        setImagenActual(imagen);
        setBoton(id)
    }

    const toggleFullscreen = () => {
        if (imgRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                imgRef.current.requestFullscreen();
            }
        }
    }

    return(
        <body className="body-ganadores">
        <Helmet>
            <title>Supermercado Bocata | Ganadores</title>
        </Helmet>
        <div className="cont-encabezado-ganadores">
            {/* <h1>GANADORES</h1> */}
        </div>
            <div className="cont-h1-ganadores">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#c90000" fill-opacity="1" d="M0,64L120,58.7C240,53,480,43,720,64C960,85,1200,139,1320,165.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>
                <img className="g-icon d-md img-fluid" src="./assets/ganador-icon.png" alt="ganador-icon" />
                <h1 className="h1">¡GANADORES  DE <span style={{background:'red', color:'white'}}>SORTEOS!</span></h1>
                <img className="g-icon2 img-fluid" src="./assets/ganador-icon.png" alt="ganador-icon" />
            </div>
            <section className="s-sorteos d-flex flex-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#c90000" fill-opacity="1" d="M0,224L34.3,224C68.6,224,137,224,206,218.7C274.3,213,343,203,411,186.7C480,171,549,149,617,165.3C685.7,181,754,235,823,234.7C891.4,235,960,181,1029,176C1097.1,171,1166,213,1234,234.7C1302.9,256,1371,256,1406,256L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
                <div className="cont-sorteos">
                <h2 className=""><span style={{textDecoration:'underline'}}>SORTEOS</span> EN BOCATA</h2>
                <p>En Bocata, creemos que nuestros clientes son parte fundamental de nuestra familia. Queremos retribuir su lealtad y apoyo de una manera emocionante y gratificante. Por eso, organizamos sorteos regulares llenos de premios increíbles. Participar en nuestros sorteos es una oportunidad única para ti de llevar a casa fabulosos regalos, desde vales de compra y productos exclusivos hasta experiencias memorables.</p>
                <Link to='#clase-ganadores'>
                <button className="btn-ganadores">Ver GANADORES</button>
                </Link>
                </div>
                <img className="img-fluid" src="./assets/draw-7.svg" alt="draw-7" />
            </section>

        <div className="cont-ganadores-h1" id="clase-ganadores">
            <h1>¡ESTOS SON LOS <span style={{background: 'red', color:'white'}}>GANADORES!</span></h1>
        </div>
        <section className="cont-imagenes-ganadores">
        <div className="botones-ganadores">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#c90000" fill-opacity="1" d="M0,224L80,234.7C160,245,320,267,480,245.3C640,224,800,160,960,160C1120,160,1280,224,1360,256L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>

            <p>Participa en nuestras redes sociales para tener probabilidades de ganar en un sorteo!</p>

            <button onClick={() =>{ mostrarImg('https://res.cloudinary.com/dfnton7oq/image/upload/v1714844115/samples/bocata-imgs/ganador-sorteo-1_n4pgwt.png', 'primero')}} className={`btn-ganadores-img ${botonActivo === 'primero' ? 'activo' : ''}`}>FEB/MAR 2024 {botonActivo === 'primero' && <img src='./assets/flecha-img.png' className='flecha'/>}</button>

            <button onClick={() =>{ mostrarImg('https://res.cloudinary.com/dfnton7oq/image/upload/v1714844155/samples/bocata-imgs/mes-3-1_nfzorw.png', 'segundo')}} className={`btn-ganadores-img ${botonActivo === 'segundo' ? 'activo' : ''}`}>DIC 2023 - ENE 2024 {botonActivo === 'segundo' && <img src='./assets/flecha-img.png' className='flecha'/>}</button>

            <button onClick={() =>{ mostrarImg('https://res.cloudinary.com/dfnton7oq/image/upload/v1714844223/samples/bocata-imgs/mes-1-1_qclsdq.png', 'tercero')}} className={`btn-ganadores-img ${botonActivo === 'tercero' ? 'activo' : ''}`}>OCT - NOV 2023 {botonActivo === 'tercero' && <img src='./assets/flecha-img.png' className='flecha'/>}</button>

            <button onClick={() => {mostrarImg('https://res.cloudinary.com/dfnton7oq/image/upload/v1714844224/samples/bocata-imgs/mes-2-1_kuccug.png', 'cuarto')}} className={`btn-ganadores-img ${botonActivo === 'cuarto' ? 'activo' : ''}`}>AGO - SET 2023 {botonActivo === 'cuarto' && <img src='./assets/flecha-img.png' className='flecha'/>}</button>
            </div>

            <div className="cont-img-btns">
                <img className="img-fluid" ref={imgRef} src={imagenActual} alt="" onClick={toggleFullscreen}/>
            </div>


        </section>
        
        </body>
    )

}

export default ganadores;