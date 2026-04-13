import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo" style={{ marginBottom: '1rem' }}>
            <span className="logo-icon">M</span>
            <span className="logo-text">Mecani<span className="text-gradient">Flow</span></span>
          </div>
          <p className="footer-desc">
            El sistema operativo definitivo para talleres mecánicos que buscan precisión, velocidad y control total.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Producto</h4>
          <a href="#">Características</a>
          <a href="#">Inventario</a>
          <a href="#">Órdenes</a>
          <a href="#">Precios</a>
        </div>
        
        <div className="footer-links">
          <h4>Recursos</h4>
          <a href="#">Blog</a>
          <a href="#">Guía de Talleres</a>
          <a href="#">Soporte</a>
        </div>
        
        <div className="footer-links">
          <h4>Legal</h4>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MecaniFlow. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
