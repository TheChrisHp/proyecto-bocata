import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
    <>
    <footer>
        <Link to="./Inicio">
        <img src='../resources/bocata-logo.png' alt="logo-bocata-footer" />
        </Link>
        <div className='itemf-3'>
            <ul>
                <a><Link to>Contacto</Link></a>
                <Link to>Postulacion</Link>
                <Link to>Mailing</Link>
                <Link to>Imbatibles</Link>
            </ul>
        </div>
        
        <div className='itemf-1'>
        <a>
        <img className='icon-footer' src="../resources/horario.png" alt="horario-icono-footer" />
            Horarios
        </a>
            <ul>
                <li>De 8:00 a 22:30 hs, todos los días de la semana. (Abierto domingos)</li>
            </ul>
        </div>
        <div className='itemf-2'>
            <a>
            <img className='icon-footer' src="../resources/ubicacion.png" alt="ubicacion-icono-footer" />
                Ubicacion
            </a>
            <ul>
                <li>Av. 8 de octubre 4130, esq. Pascual Paladino.</li>
                <a><img src="./resources/tel-icon.png" alt="tel-icon" />
                Tel. 2509 7777
                </a>
            </ul>
        </div>

        <div className='itemf-4'>
        </div>
    </footer>
    <div className='redes-sociales'>
    <h1>
        ¡Pudes también encontrarnos en nuestras Redes Sociales!
    </h1>
    <ul>
        <li><a> <img src="./resources/ig-icon.png" alt="instagram-icon" />
                Instagram
        </a></li>
        <li><a> <img src="./resources/fb-icon.png" alt="facebook-icon" />
                Facebook
        </a></li>
        <li><a> <img src="./resources/tiktok-icon.png" alt="tiktok-icon" />
                Tiktok
        </a></li>
        </ul>
    </div>
    <div className='copy-footer'>
            <p>Bocata @2005-2024. Todos los derechos reservados.</p>
    </div>
    </>
    )
}

export default Footer;