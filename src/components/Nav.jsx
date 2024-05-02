import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="cont-img-logo-nav" to="/Inicio">
            <img className='logo-bocata' src="./resources/bocata-logo.png"></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/Inicio">Inicio</Link>
              <Link className="nav-link" to="/mailing">Mailing</Link>
              <Link className="nav-link" to="/contacto">Contacto</Link>
              <li class="nav-item dropdown"/>
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Más
                  </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="./Postulate">Postulate</Link></li>
                <li><Link className="dropdown-item" to="#">Ganadores de Sorteo</Link></li>
                <li><Link className="dropdown-item" to="./Inicio#mapa-ubicacion">Ubicación</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
