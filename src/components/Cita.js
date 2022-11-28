import React from 'react';
import PropTypes from 'prop-types';



const Cita = ({cita,eliminarCita}) => {
    return ( <div className="cita">
    <p>Mascota : <span>{cita.mascota}</span></p>
    <p>Dueño : <span>{cita.propietario}</span></p>
    <p>Fecha : <span>{cita.fecha}</span></p>
    <p>Hora : <span>{cita.hora}</span></p>
    <p>Sintomas : <span>{cita.sintomas}</span></p>
    <div className='flex justify-between'>
        <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={()=> eliminarCita(cita.id)}>
            Eliminar &times;
        </button>
        <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={()=> eliminarCita(cita.id)}>
            Eliminar &times;
        </button>
    </div>
</div> );
}
 
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
export default Cita;