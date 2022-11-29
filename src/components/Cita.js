import React from 'react';
import PropTypes from 'prop-types';



const Cita = ({ cita, eliminarCita, setPaciente }) => {

    const handleEliminar = () => {
        if (window.confirm('Deseas eliminar esta cita')) {
            eliminarCita(cita.id)
        }
    }
    return (<div className="cita">
        <p>Mascota : <span>{cita.mascota}</span></p>
        <p>Dueño : <span>{cita.propietario}</span></p>
        <p>Fecha : <span>{cita.fecha}</span></p>
        <p>Hora : <span>{cita.hora}</span></p>
        <p>Sintomas : <span>{cita.sintomas}</span></p>
        <div className='container'>
            <div className="row">
                <div className="one-half column">
                    <button
                        className="button editar"
                        onClick={() => setPaciente(cita)}>
                        Editar
                    </button>
                </div>
                <div className="one-half column">
                    <button
                        className="button eliminar"
                        onClick={() => handleEliminar()}>
                        Eliminar &times;
                    </button>
                </div>
            </div>
        </div>
    </div>);
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}
export default Cita;