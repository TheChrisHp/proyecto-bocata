import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <div className="cont-cont-carrousel">
        <div className="cont-carrousel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 2"
              ></button>
              {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button> */}
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://cdn.discordapp.com/attachments/1228542950636781569/1232181570627174440/434601893_814535467370693_6833600161098087434_n.jpg?ex=662bd1c3&is=662a8043&hm=279ff1ab565c65dcfb56e526e60d721fe23c60312d9b1ccab603c6f69828fc08&"
                  class="d-block w-100"
                  alt="inicio-carrusel"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.discordapp.net/attachments/1228542950636781569/1232878531520892948/img42.jpg?ex=662bb7db&is=662a665b&hm=ebe93175297a18e87c3ee4269c5403472c9df147d7f56b06347a8deabc51949f&=&format=webp&width=1920&height=1080"
                  class="d-block w-100"
                  alt="inicio-carrusel2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.discordapp.com/attachments/1228542950636781569/1232181570627174440/434601893_814535467370693_6833600161098087434_n.jpg?ex=66288603&is=66273483&hm=e8f26efdae32412ffa8b30ed2e891169c0b8113c55edc7847c1d142edd467aec&"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              {/* <div class="carousel-item">
      <img src="https://cdn.discordapp.com/attachments/1228542950636781569/1232181570627174440/434601893_814535467370693_6833600161098087434_n.jpg?ex=66288603&is=66273483&hm=e8f26efdae32412ffa8b30ed2e891169c0b8113c55edc7847c1d142edd467aec&" class="d-block w-100" alt="..."/>
    </div> */}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
      <main>
        <section className="cont-texto">
        <h1>Si elegis Supermercado, elegís <span style={{color: "#D40000"}}>Bocata</span></h1>
        <p>Nuestro compromiso es contigo.</p>
        <button className="boton">Boton</button>
        </section>
        <img src="https://cdn.discordapp.com/attachments/1228542950636781569/1232770813736783952/bocata-logo.png?ex=662aaac9&is=66295949&hm=75c68973bdae1b09d7f893b85fbce9dadad7adde04f9b2b9d6a9d58e51fa4b3a&" alt="" />
      </main>

      <section className='section-2'>
      <div className="img-bocata-p">
        <h1>IMBATIBLES</h1>
      </div>
    </section>

  <div className='cont-imbatibles'>

  <svg className='svg-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f90000" fill-opacity="1" d="M0,288L120,261.3C240,235,480,181,720,138.7C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
    
    <section className='s-imbatibles'>
      <h1><span>NO</span> te pierdas de los precios <span style={{color: "white", backgroundColor:"red"}}>¡IMBATIBLES!</span></h1>
    </section>
    <img className='img-promocion' src="../resources/descuento.png" alt="promocion-imagen" />
    </div>

    {/* CARROUSEL 2 */}
    <div className="cont-cont-carrousel2">
    <svg className='svg-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#f90000" fill-opacity="1" d="M0,192L34.3,186.7C68.6,181,137,171,206,149.3C274.3,128,343,96,411,101.3C480,107,549,149,617,160C685.7,171,754,149,823,122.7C891.4,96,960,64,1029,85.3C1097.1,107,1166,181,1234,181.3C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
    </svg>
        <div className="cont-carrousel2">
          <div
            id="carouselExampleIndicators2"
            class="carousel slide"
            data-bs-ride="false"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to="1"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators2"
                data-bs-slide-to="2"
                aria-label="Slide 2"
              ></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://media.discordapp.net/attachments/1228542950636781569/1232878532171005972/img54.jpg?ex=662bb7db&is=662a665b&hm=f5f5f92d6e5fd400f7cfe1e44658a6aca71f0475702a415d26985439c5653a21&=&format=webp&width=610&height=468"
                  class="d-block w-100"
                  alt="inicio-carrusel"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.discordapp.net/attachments/1228542950636781569/1232878530464055306/img70.jpg?ex=662bb7db&is=662a665b&hm=913181184dc4fe1abb88a14060acc47f60b471138f051755f37c475d24884df2&=&format=webp&width=610&height=468"
                  class="d-block w-100"
                  alt="inicio-carrusel2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://media.discordapp.net/attachments/1228542950636781569/1232878530740748378/img74.jpg?ex=662bb7db&is=662a665b&hm=218467ed330efa321179cf57a48149bac28adc15856bc088e2b188ddb0b1fe1b&=&format=webp&width=610&height=468"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img src="https://media.discordapp.net/attachments/1228542950636781569/1232878533198614568/img66.jpg?ex=662bb7dc&is=662a665c&hm=efed700bb965b77a06d313c512d19307c7df8eb90730472133367f1307d2fa60&=&format=webp&width=610&height=468" class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators2"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>

      <div className='cont-btn-carrou-2'>
        <Link to={""}>
        <button to="https://google.com"> 🔥 ¡Ver todos los IMBATIBLES! 🔥</button>
        </Link>
      </div>
      <svg className='svg-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f90000" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,96C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
    

        



    </>
  );
};

export default Inicio;
