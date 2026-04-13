import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">Mecani<span className="text-gradient">Flow</span></span>
        </div>
        <div className="nav-links desktop-only">
          <a href="#features">Características</a>
          <a href="#inventory">Inventario</a>
          <a href="#orders">Órdenes</a>
        </div>
        <div className="nav-actions">
          <button className="btn-secondary">Iniciar Sesión</button>
          <button className="btn-primary desktop-only">Prueba Gratis</button>
        </div>
      </div>
    </nav>
  );
}
