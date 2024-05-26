import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Swal from 'sweetalert2'

const Postulate = () =>{
    const [errorNombre, setNombre] = useState('')
    const [errorApellido, setApellido] = useState('')
    const [errorGmail, setGmail] = useState('')

        const handleFormSubmit = (e) => {
          e.preventDefault();
          
          const nombre = e.target.nombre.value;
          const apellido = e.target.apellido.value;
          const email = e.target.email.value;

          if (nombre && apellido && email){
                Swal.fire({
                    background: '#C40000',
                    color: 'white',
                    title: '¡Formulario Enviado!',
                    text: 'Gracias por postularte. Pronto nos pondremos en contacto contigo.',
                    icon: 'success',
                    buttonsStyling: 'white',
                    confirmButtonText: 'Aceptar',
                });
            }else{
                Swal.fire({
                    background: 'white',
                    color: 'black',
                    title: 'Error',
                    text: '¡Por favor Completa los campos OBLIGATORIOS!',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }
            if(!nombre){
                setNombre('Debes rellenar todos los campos.')
                Swal.fire({
                    background: 'white',
                    color: 'black',
                    title: 'Error',
                    text: '¡Por favor Completa los campos OBLIGATORIOS!',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }else{
                setNombre('')
            }
            if (!apellido){
                setApellido('Debes rellenar todos los campos.')
                Swal.fire({
                    background: 'white',
                    color: 'black',
                    title: 'Error',
                    text: '¡Por favor Completa los campos OBLIGATORIOS!',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }else{
                setApellido('')
            }
            if (!email){
                setGmail('Debes rellenar todos los campos.')
                Swal.fire({
                    background: 'white',
                    color: 'black',
                    title: 'Error',
                    text: '¡Por favor Completa los campos OBLIGATORIOS!',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                });
            }else{
                setGmail('')
            }
        }
    return(
    <>
        <Helmet>
            <title>Supermercado Bocata | Solicitud</title>
        </Helmet>
        <div className="as-postulate">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f90000" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,245.3C672,245,768,203,864,160C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>  
            <div className="t-postulate">
                <h1>¡Envíanos tu Solicitud!</h1>
                <img src="./draw-3.svg" alt="draw-2" />
            </div>
            <div className="cont-form2">
                <form onSubmit={handleFormSubmit} method="get">
                    <p>Ingrese su Nombre</p>
                    <input type="text" name="nombre" placeholder="Ingrese su nombre Aquí" />
                    <p className='err-p-pos'>{errorNombre}</p>
                    <p>Ingrese su Apellido</p>
                    <input type="text" name="apellido" placeholder="Ingrese su apellido Aquí"/>
                    <p className='err-p-pos'>{errorApellido}</p>
                    <p>Ingresa tu E-mail</p>
                    <input type="email" name="email" placeholder="Ingrese su Email Aquí" />
                    <p className='err-p-pos'>{errorGmail}</p>
                    <p>Sexo</p>
                    <select name="sexo" class="form-select" aria-label="Default select example">
                    <option selected>Selecciona una opción</option>
                    <option value="1">Hombre</option>
                    <option value="2">Mujer</option>
                    <option value="3">Prefiero no decirlo</option>
                    </select>
                    <p>Puesto Solicitado</p>
                    <select name="puesto" class="form-select" aria-label="Default select example">
                    <option selected>Selecciona una opción</option>
                    <option value="1">Encargados de Caja</option>
                    <option value="2">Encargados de Salón</option>
                    <option value="3">Encargados de Depósito</option>
                    <option value="4">Cajeras</option>
                    <option value="5">Empaquetadores</option>
                    <option value="6">Reponedores de Salón</option>
                    <option value="7">Reponedores de Lácteos</option>
                    <option value="8">Reponedores de Congelados</option>
                    <option value="9">Auxiliar de limpieza</option>
                    <option value="10">Personal para Fiambrería</option>
                    <option value="11">Personal para Depósito</option>
                    </select>
                    <p>¡Envía tu CV!</p>
                    <input class="form-control" type="file" id="formFile" name="archivo"/>
                    <p>¡Envíanos tu Carta de Presentación!</p>
                    <textarea name="texto" cols={23} rows={5} placeholder="Escribe tu mensaje Aquí"/>
                    <input className="boton-enviar" type="submit" value="Enviar" name="boton" />
                </form>
            </div>
        </div>
    </>
    )
}

export default Postulate;