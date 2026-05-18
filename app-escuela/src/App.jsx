import "./App.css";
import AlumnoCard from './components/AlumnoCard';
import Navbar from './components/Navbar';
//componente padre.
function App() {
  return (
    <>
    
      <Navbar />
      
      <div className='container'>
        <h1 className='mb-4'>Listado alumnos</h1>
        <div className='row'>

          <AlumnoCard 
          nombre="Juan Pérez" 
          carrera="Ingeniería de Sistemas" 
          estado="Matriculado" 
          />

          <AlumnoCard 
          nombre="Elena García" 
          carrera="Ingeniería de Sistemas" 
          estado="Matriculado" 
          />

          <AlumnoCard 
          nombre="Carlos Rodriguez" 
          carrera="Ingeniería de Sistemas" 
          estado="Inactivo" 
          />

          <AlumnoCard 
          nombre="Felipe Sanchez" 
          carrera="Tecnología de la Información" 
          estado="Matriculado" 
          />

          <AlumnoCard 
          nombre="Ursula Martinez" 
          carrera="Ingeniería de Sistemas" 
          estado="Matriculado" 
          />

          <AlumnoCard 
          nombre="Daniela Gomez" 
          carrera="Programación de Software" 
          estado="Inactivo" 
          />

          <AlumnoCard 
          nombre="Gustavo Ramirez" 
          carrera="Ingeniería de Sistemas" 
          estado="Matriculado" 
          />

          <AlumnoCard 
          nombre="Pepito Lopez" 
          carrera="Redes y Comunicaciones" 
          estado="Inactivo" 
          />

          <AlumnoCard 
          nombre="Maria Fernanda" 
          carrera="Redes y Comunicaciones" 
          estado="Matriculado" 
          />

        </div>

      </div>
      
    </>
  );
}

export default App;