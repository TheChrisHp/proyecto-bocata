import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import React, { useState } from 'react';

const Contacto = () =>{
    
    const [errNom, setNom] = useState('')
    const [errAp, setAp] = useState('')
    const [errGm, setGm] = useState('')

    const notificacion = (e) =>{
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const apellido = e.target.apellido.value;
        const email = e.target.email.value;


        if (!nombre){
            setNom('Debes rellenar todos los campos.')
            Swal.fire({
                background: 'white',
                color: 'black',
                title: 'Error',
                text: 'Debes rellenar todos los campos',
                icon: 'error',
                buttonsStyling: 'white',
                confirmButtonText: 'Aceptar',
            });
        }else{
            setNom('')
        }

        if(!apellido){
            setAp('Debes rellenar todos los campos.')
            Swal.fire({
                background: 'white',
                color: 'black',
                title: 'Error',
                text: 'Debes rellenar todos los campos',
                icon: 'error',
                buttonsStyling: 'white',
                confirmButtonText: 'Aceptar',
            });
        }else{
            setAp('')
        }
        if(!email){
            setGm('Debes rellenar todos los campos.')
            Swal.fire({
                background: 'white',
                color: 'black',
                title: 'Error',
                text: 'Debes rellenar todos los campos',
                icon: 'error',
                buttonsStyling: 'white',
                confirmButtonText: 'Aceptar',
            });
        }else{
            setGm('')
        }

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
        }
    }
 
    return (
    <>
        <Helmet>
            <title>Supermercado Bocata | Contacto</title>
        </Helmet>
        <div className="as-contacto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f90000" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,208C384,235,480,213,576,202.7C672,192,768,192,864,208C960,224,1056,256,1152,266.7C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
            <div className="t-contacto">
                <h1>Envíenos su mensaje</h1>
                <img src="./draw-2.svg" alt="draw-2" />
            </div>
            <div className="cont-form">
                <form onSubmit={notificacion} method="get">
                    <p>Ingrese su Nombre</p>
                    <input type="text" name="nombre" placeholder="Ingrese su nombre Aquí" />
                    <p className="err-p">{errNom}</p>
                    <p>Ingrese su Apellido</p>
                    <input type="text" name="apellido" placeholder="Ingrese su apellido Aquí"/>
                    <p className="err-p">{errAp}</p>
                    <p>Ingrese su Email</p>
                    <input type="email" name="email" placeholder="Ingrese su Email Aquí"/>
                    <p className="err-p">{errGm}</p>
                    <p>Envíanos tu comentario</p>
                    <textarea name="texto" cols={23} rows={5} placeholder="Escribe tu mensaje Aquí"/>
                    <input className="boton-enviar" type="submit" value="Enviar" name="boton" />
                </form>
            </div>
        </div>
    </>
    )
}

export default Contacto;