import React, { useState } from "react";

const Contactos = () => {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("¡Mensaje enviado! Pronto nos contactaremos contigo.");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Contactos</h2>
      <div className="row">
        {/* Formulario de contacto */}
        <div className="col-lg-6 mb-4">
          <div className="card p-4 shadow">
            <h5>Envíanos un mensaje</h5>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-3"
                placeholder="Mensaje"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-100">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Información de soporte y mapa */}
        <div className="col-lg-6 mb-4">
          <div className="card p-4 shadow">
            <h5>Información de soporte</h5>
            <p>
              <strong>Correo:</strong> soporte@matricula-pro.com
            </p>
            <p>
              <strong>Teléfono:</strong> +51 999 999 999
            </p>
            <p>
              <strong>Horario:</strong> Lunes a Viernes 08:00 - 17:00
            </p>

            {/* Mapa opcional */}
            <div className="mt-3">
              <h6>Ubicación</h6>
              <iframe
                title="mapa-institucion"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0412453286716!2d-76.97893368483942!3d-12.057693145748037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbf1f04c4e49%3A0x3b1c95b3a5f2f0c9!2sSENATI!5e0!3m2!1ses-419!2spe!4v1688627340000!5m2!1ses-419!2spe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Chat de ayuda opcional */}
            <div className="mt-3">
              <h6>Chat de ayuda</h6>
              <p>Para dudas rápidas, envíanos un mensaje usando el chat o el formulario.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;