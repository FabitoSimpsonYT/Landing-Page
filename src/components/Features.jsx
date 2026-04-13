import './Features.css';

export default function Features() {
  const processSteps = [
    {
      title: "Órdenes de Compra",
      desc: "Genera, aprueba y rastrea órdenes a proveedores en segundos. Alertas automáticas para stock crítico.",
      icon: "📦",
      color: "primary",
      delay: "delay-1"
    },
    {
      title: "Inventario Exacto",
      desc: "Sincronización en tiempo real. Cada tornillo y bujía contabilizado. Escaneo de QR y códigos de barras.",
      icon: "🔍",
      color: "secondary",
      delay: "delay-2"
    },
    {
      title: "Mecánica Integrada",
      desc: "Asigna repuestos directamente a la orden de trabajo del vehículo. Control de tiempos y costos.",
      icon: "⚙️",
      color: "tertiary",
      delay: "delay-3"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-glow"></div>
      <div className="container">
        <div className="features-header animate-fade-up">
          <h2 className="section-title">El motor de tu negocio</h2>
          <p className="section-subtitle">
            Todo lo que necesitas para operar sin fricciones, en un ecosistema conectado.
          </p>
        </div>

        <div className="features-grid">
          {processSteps.map((step, index) => (
            <div className={`feature-card glass-panel animate-fade-up ${step.delay} feature-${step.color}`} key={index}>
              <div className="feature-card-glow"></div>
              <div className="feature-icon">{step.icon}</div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-desc">{step.desc}</p>
              <a href="#" className="feature-link">Saber más →</a>
            </div>
          ))}
        </div>

        <div className="feature-highlight glass-panel animate-fade-up delay-2">
          <div className="highlight-content">
            <h3>Flujo de Trabajo Perfecto</h3>
            <p>1. Ingresa vehículo &rarr; 2. Crea orden de trabajo &rarr; 3. Asigna repuestos del inventario &rarr; 4. (Si no hay) Genera órden de compra automática.</p>
          </div>
          <div className="highlight-visual">
             <div className="pulse-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
