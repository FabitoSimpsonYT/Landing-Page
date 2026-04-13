function App() {
  return (
    <div>
      {/* 1. Encabezado o Navegación */}
      <header className="encabezado">
        <h1>TallerFlow</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#caracteristicas">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* 2. Sección Principal (Lo primero que se ve) */}
      <main>
        <section id="inicio" className="seccion-principal">
          <div className="seccion-principal-contenido">
            <div className="seccion-principal-imagen">
              <div className="imagen-con-degradado"></div>
            </div>
            <div className="seccion-principal-texto">
              <h2>EL SISTEMA MÁS SIMPLE PARA<br/>TU TALLER MECÁNICO</h2>
              <p>
                Controla tus órdenes de compra, inventario de repuestos y <br /> 
                trabajos mecánicos en un solo lugar fácil de usar.
              </p>
              <div className="botones-accion">
                <button className="boton-blanco">LO QUIERO</button>
                <button className="boton-amarillo">VER MÁS</button>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sección de Características (Las 3 cajitas) */}
        <section id="caracteristicas" className="seccion-caracteristicas">
          <h2>Nuestros 3 pilares</h2>
          
          <div className="lista-cajas">
            <div className="caja">
              <h3>📦 Órdenes de Compra</h3>
              <p>Pide repuestos muy fácil y rápido a tus proveedores sin complicaciones.</p>
            </div>
            
            <div className="caja">
              <h3>🔍 Inventario</h3>
              <p>Sabe exactamente qué piezas tienes en tu taller en todo momento.</p>
            </div>
            
            <div className="caja">
              <h3>⚙️ Trabajos Mecánicos</h3>
              <p>Anota qué repuestos usaste para cada auto que reparas y cobra exacto.</p>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Pie de página (Footer) */}
      <footer id="contacto" className="pie-de-pagina">
        <p>¿Tienes dudas? Escríbenos a fabian.mora2301@alumnos.ubiobio.cl</p>
        <p>Teléfono: +56974111524</p>
      </footer>
    </div>
  );
}

export default App;
