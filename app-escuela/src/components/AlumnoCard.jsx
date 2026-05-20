// src/components/AlumnoCard.jsx 
import { useState } from 'react';
import llamafo from '../assets/llamafo.jpg';


const AlumnoCard = ({ nombre, carrera, estado: estadoInicial,  }) =>{
  
  const [estado, setEstado] = useState(estadoInicial);
 
  const badgeColor = estado === "Matriculado" ? "success" : "secondary";

  const cambiarEstado = () => {
    if (estado === "Matriculado") {
      setEstado("Inactivo");
    }else {
      setEstado("Matriculado");
    }
  }
      
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-0 alumno-card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{nombre}</h5>
          <img 
            src={llamafo}
            alt="Alumno"
            className="img-fluid rounded mb-3"
          />
          <p className="card-text mb-1"><strong></strong> {carrera}</p>
          <p className={`mb-3 badge bg-${badgeColor}`}>{estado}</p>
          <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-info" onClick={cambiarEstado} >Cambiar estado</button>
            <button className="btn btn-sm btn-outline-warning me2" >Editar</button>
            <button className="btn btn-outline-danger" >Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;