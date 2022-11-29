import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Formulario = ({ crearCita, paciente }) => {
  //Crear State de Citas
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  
  useEffect(()=>{
    if (Object.keys(paciente).length > 0) {
      setCita({
        'mascota': paciente['mascota'],
        'propietario': paciente['propietario'],
        'fecha': paciente['fecha'],
        'hora': paciente['hora'],
        'sintomas': paciente['sintomas'],
      })
    }
  },[paciente]);
  
  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores del state Cita
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    
    //Crear cita
    crearCita(cita);
    //Reiniciar Form
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>{paciente.id ? 'Editar Cita': 'Crear cita'}</h2>
      {error ? (
        <p className="alerta-error"> Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label htmlFor="nombre">Nombre Mascota</label>
        <input
          id="nombre"
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label htmlFor="propietario">Nombre Dueño</label>
        <input
          id="propietario"
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={handleChange}
          value={propietario}
        />

        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          name="hora"
          id="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor="Sintomas">Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          id="Sintomas"
          placeholder="Sintomas de la mascota"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          {paciente.id ? 'Editar Cita': 'Agregar Cita'}
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default Formulario;
