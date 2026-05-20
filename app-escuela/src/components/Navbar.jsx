import iconoM from '../assets/icono_M.png';
const Navbar = ({ setVista }) => { 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm mb-4">
      <div className="container">
          
        {/* Logo / título */}
        <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="logo-circle me-3">
                <img src={iconoM} alt="Logo Matrícula" className="logo-img" />
            </div>

          <div>
              <h5 className="mb-0 fw-bold text-white">MATRÍCULA PRO</h5>
              <small className="text-light">Sistema Académico</small>
          </div>
        </a>

        {/* Botón móvil 3 puntos */}
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => setVista("inicio")}>
                <i className="fas fa-home me-1"></i> Inicio
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => setVista("cursos")}>
                <i className="fas fa-book me-1"></i> Cursos
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => setVista("especializaciones")}>
                <i className="fas fa-users me-1"></i> Especializaciones
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => setVista("contactos")}>
                <i className="fas fa-address-book me-1"></i> Contactos
              </button>
            </li>

            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => setVista("login")}>
                <i className="fas fa-user me-1"></i> Login
              </button>
            </li>
          </ul>

          {/* Botón cerrar sesión */}
          <button className="btn btn-outline-light btn-sm mt-2 mt-lg-0">
            <i className="fas fa-sign-out-alt me-1"></i>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;