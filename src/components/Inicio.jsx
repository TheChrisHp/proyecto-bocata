import { SassColor } from "sass";

const Inicio = () => {
  return (
    <>
      <main class="main">
        <section class="section banner banner-section">
          <div class="container banner-column">
            <img
              class="banner-image"
              src="https://cdn.discordapp.com/attachments/1228542950636781569/1232770813736783952/bocata-logo.png?ex=662aaac9&is=66295949&hm=75c68973bdae1b09d7f893b85fbce9dadad7adde04f9b2b9d6a9d58e51fa4b3a&"
              alt="logo-bocata"
            />
            <div class="banner-inner">
              <h1 class="titulo-xl">
                Si elegís supermercado elegis <span style={{color:'red'}}>Bocata</span>
              </h1>
              <p class="frase">
                Nos encontramos en bla bla bla Lorem ipsum dolor sit amet
                consectetur adipisicing elit. At amet ab praesentium suscipit
                reprehenderit ipsam quos accusamus vel tenetur illo?
              </p>
              <button class="boton">
                Ver Mailing</button>
            </div>
          </div>
        </section>
      </main>
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
                  src="https://cdn.discordapp.com/attachments/1228542950636781569/1232181570627174440/434601893_814535467370693_6833600161098087434_n.jpg?ex=66288603&is=66273483&hm=e8f26efdae32412ffa8b30ed2e891169c0b8113c55edc7847c1d142edd467aec&"
                  class="d-block w-100"
                  alt="mailing"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://cdn.discordapp.com/attachments/1228542950636781569/1232181570627174440/434601893_814535467370693_6833600161098087434_n.jpg?ex=66288603&is=66273483&hm=e8f26efdae32412ffa8b30ed2e891169c0b8113c55edc7847c1d142edd467aec&"
                  class="d-block w-100"
                  alt="..."
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
    </>
  );
};

export default Inicio;
