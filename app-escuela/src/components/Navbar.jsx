import logo from './assets/icono_M.png';
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
    <div className="container">
        
        {/* Logo / título */}
        <a className="navbar-brand d-flex align-items-center" href="#">
        <div className="logo-circle me-3">
            <i className="fas fa-user-graduate"></i>
        </div>

        <div>
            <h5 className="mb-0 fw-bold text-white">MATRÍCULA PRO</h5>
            <small className="text-light">Sistema Académico</small>
        </div>
        </a>

        {/* Botón móvil 3 puntos */}
        <button
        className="btn text-white d-lg-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <i className="fas fa-ellipsis-v fs-4"></i>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
            <a className="nav-link active fw-semibold" href="#">
                <i className="fas fa-home me-1"></i> Inicio
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">
                <i className="fas fa-book me-1"></i> Cursos
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">
                <i className="fas fa-users me-1"></i> Especializaciones
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">
                <i className="fas fa-address-book me-1"></i> Contactos
            </a>
            </li>

            <li className="nav-item">
            <a className="nav-link fw-semibold" href="#">
                <i className="fas fa-user me-1"></i> Login
            </a>
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