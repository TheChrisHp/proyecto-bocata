import { Link } from 'react-router-dom';

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
              {/* <Link className="nav-link disabled" to="#">Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
