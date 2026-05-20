import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/Navbar';
import AlumnoCard from './components/AlumnoCard';
import Contactos from './components/Contactos';
import Contador from './components/contador';
import AlumnoForm from './components/AlumnoForm';

function App() {

  // Estado para controlar las vistas
  const [vista, setVista] = useState("inicio");

  // Estado para guardar alumnos de la API
  const [alumnos, setAlumnos] = useState([]);

  // Obtener alumnos desde Laravel
  const obtenerAlumnos = async () => {
    try {

      const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos');
      const datos = await respuesta.json();

      // Laravel puede devolver data o directamente el arreglo
      setAlumnos(datos.data || datos);

    } catch (error) {

      console.error('Error al obtener los alumnos:', error);

    }
  };

  // Cargar alumnos al iniciar
  useEffect(() => {

    obtenerAlumnos();

  }, []);

  return (
    <>
      <div className="app-background">

        {/* Navbar */}
        <Navbar setVista={setVista} />

        <div className="container mt-4">

          {/* ================= INICIO ================= */}
          {vista === "inicio" && (
            <>
              <h1 className='mb-4'>Listado alumnos</h1>

              {/* Formulario */}
              <AlumnoForm recargarAlumnos={obtenerAlumnos} />

              {/* Tarjetas */}
              <div className='row mt-4'>

                {alumnos.map((alumno) => (

                  <AlumnoCard
                    key={alumno.id_alumno}
                    nombre={`${alumno.nombre} ${alumno.apellidos}`}
                    carrera={alumno.email}
                    estadoInicial={alumno.estado_matricula}
                  />

                ))}

                {/* Contador */}
                <Contador />

              </div>
            </>
          )}

          {/* ================= CURSOS ================= */}
          {vista === "cursos" && (
            <div>
              <h2>Cursos</h2>
              <p>Aquí podrás ver y gestionar los cursos disponibles.</p>
            </div>
          )}

          {/* ================= ESPECIALIZACIONES ================= */}
          {vista === "especializaciones" && (
            <div>
              <h2>Especializaciones</h2>
              <p>Listado de especializaciones disponibles.</p>
            </div>
          )}

          {/* ================= CONTACTOS ================= */}
          {vista === "contactos" && (
            <Contactos />
          )}

          {/* ================= LOGIN ================= */}
          {vista === "login" && (
            <div className="login-container">

              <h2 className="text-center mb-4">Login</h2>

              <form
                className="card p-5 shadow mx-auto"
                style={{ maxWidth: "600px", width: "100%" }}
              >

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Usuario"
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Contraseña"
                />

                <button className="btn btn-primary w-100">
                  Ingresar
                </button>

              </form>

              <div className="text-center mt-3">
                <a href="#" className="small text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div
                className="mx-auto mt-3"
                style={{ maxWidth: "600px", width: "100%" }}
              >

                <button className="btn btn-outline-danger w-100 mb-2">
                  <i className="fab fa-google me-2"></i>
                  Iniciar con Google
                </button>

                <button className="btn btn-outline-primary w-100">
                  <i className="fab fa-facebook me-2"></i>
                  Iniciar con Facebook
                </button>

              </div>

              <p className="text-center small mt-3">
                ¿No tienes cuenta? <a href="#">Contáctanos</a> para registrarte.
              </p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default App;