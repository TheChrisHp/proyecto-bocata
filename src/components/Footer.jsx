import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
    <>
    <footer>
        <Link to="./Inicio">
        <img src='../resources/bocata-logo.png' alt="logo-bocata-footer" />
        </Link>
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
                <li>Tel. 2509 7777</li>
            </ul>
        </div>

    </footer>

    </>
    )
}

export default Footer;