import { HashLink as Link } from 'react-router-hash-link';

const Error404 = () =>{
    return(
        <div className="cont-404">
            <h1>Error 404</h1>
            <p>La página que está solicitando no existe.</p>
            <p>Vuelva a la página de Inicio aquí</p>
            <Link to='./'>
            <button className="btn-err-404">Volver al Inicio</button>
            </Link>
            <img src="./assets/draw-8.svg" alt="" />
        </div>
    )
}

export default Error404;