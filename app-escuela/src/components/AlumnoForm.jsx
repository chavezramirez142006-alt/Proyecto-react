import { useState } from 'react';


const AlumnoForm = ({ recargarAlumnos }) => {
    // 1. El estado ahora coincide con las columnas de tu migración en Laravel
    const [formulario, setFormulario] = useState({
        nombre: '',
        apellidos: '',
        dni: '',
        fecha_nacimiento: '',
        email: '',
        estado_matricula: 'matriculado' // Valor por defecto
    });
    // 2. Función universal para leer los inputs
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    };
    // 3. Función para enviar los datos a Laravel
    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            // Hacemos la petición POST a nuestra API de Laravel
            const respuesta = await fetch('http://127.0.0.1:8000/api/alumnos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json' // Fundamental para que Laravel devuelva errores en JSON
                    },
                    body: JSON.stringify(formulario)
                });
            const datos = await respuesta.json();
            if (respuesta.ok) {
                // Si Laravel responde con código 201 (Created)
                alert('Alumno guardado exitosamente en la base de datos');
                // Limpiamos el formulario
                setFormulario({
                    nombre: '', apellidos: '', dni: '', fecha_nacimiento: '',

                    email: '', estado_matricula: 'matriculado'
                });
                // Llamamos a la función del padre (App.jsx) para que vuelva apedir la lista actualizada a Laravel
                recargarAlumnos();
            } else {
                // Si hay errores de validación en Laravel (Código 422)
                console.log("Errores de validación:", datos.errors);
                alert('Error al guardar. Revisa la consola para más detalles.');
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            alert('No se pudo conectar con el servidor de Laravel.');
        }
    };
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-dark text-white">
                <h5 className="mb-0">Registrar Nuevo Alumno</h5>
            </div>
            <div className="card-body">
                <form onSubmit={manejarEnvio}>
                    <div className="row g-3">
                        {/* Se construyen los inputs asegurando que el atributo
    
    'name' coincida con el estado */}
                        <div className="col-md-6">
                            <label className="form-label">Nombres</label>
                            <input type="text" className="form-control" name="nombre"

                                value={formulario.nombre} onChange={manejarCambio} required />

                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Apellidos</label>
                            <input type="text" className="form-control"

                                name="apellidos" value={formulario.apellidos} onChange={manejarCambio}
                                required />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">DNI</label>
                            <input type="text" className="form-control" name="dni"

                                value={formulario.dni} onChange={manejarCambio} required />

                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Fecha de Nacimiento</label>
                            <input type="date" className="form-control"
                                name="fecha_nacimiento" value={formulario.fecha_nacimiento}
                                onChange={manejarCambio} required />

                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email"

                                value={formulario.email} onChange={manejarCambio} required />

                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Estado</label>
                            <select className="form-select" name="estado_matricula"
                                value={formulario.estado_matricula} onChange={manejarCambio}>
                                <option value="matriculado">Matriculado</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </div>
                        <div className="col-12 text-end mt-3">
                            <button type="submit" className="btn btn-primary">
                                <i className="fas fa-save me-2"></i>Guardar en MySQL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AlumnoForm;