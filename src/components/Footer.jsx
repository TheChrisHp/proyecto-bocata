import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <>
    <footer>
    <div className="cont-footer">
      {/* <!-- ITEMS FOOTER --> */}
    <Link className="footer-item1" to="/Inicio">
        <img className="logo-footer" src="./resources/bocata-logo.png" alt="bocata-footer" />
    </Link>

      <div className="footer-item2">
        <h1 className="h1-footer">Contacto</h1>
        <a className="icon-foot-text">
          <img className="icons-footer" src="" alt=""/>
          WhatsApp
        </a>
        <a className="icon-foot-text">
          <img className="icons-footer" src="" alt=""/>
          2783-9472
        </a>
      </div>
      <div className="footer-item3">
        <h1 className="h1-footer">Redes Sociales</h1>
        <a class='icon-foot-text'>
          <img class="icons-footer" src="" alt=""/>
          Facebook
        </a>
        <a className='icon-foot-text'>
          <img className="icons-footer" src="" alt=""/>
          Instagram
        </a>
      </div>
      {/* <!-- FINAL FOOTER --> */}
    </div>
    <div class="copy-footer">
      <br></br>
      <p class="p-copy-footer">Bocata © 2023-2024. Todos los derechos reservados</p>
    </div>
  </footer>
    </>
    )
}

export default Footer;