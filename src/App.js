import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import { v4 as uuidv4 } from "uuid";

function App() {

  
  //Arreglo de citas
  const [citas, setCitas] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas')) ?? [];
    setCitas(citasIniciales)
  }, [])

  useEffect(() => {
      localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  //Agregar cita
  const crearCita = cita => {
    if (paciente.id) {
      cita.id = paciente.id
      const citasActualizadas = citas.map(citaTemporal => citaTemporal.id === cita.id ? cita : citaTemporal)
      setCitas(citasActualizadas);
      setPaciente({})
    } else {
      //Asignar id
      cita.id = uuidv4();
      setCitas([
        ...citas,
        cita
      ])
    }
  }

  const eliminarCita = key => {      
      const nuevasCitas = citas.filter(cita => cita.id !== key)
      setCitas(nuevasCitas);
  }


  
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} 
              paciente={paciente}/>
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>

            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                setPaciente={setPaciente}
                />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
