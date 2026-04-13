import React, { Suspense } from 'react';
import './Hero.css';
import Bus3DViewer from './Bus3DViewer';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-content">
        <div className="hero-content-wrapper">
          <div className="hero-image-wrapper animate-fade-up">
            <div className="glass-panel mockup-dashboard">
              <div className="mockup-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="mockup-body" style={{ position: 'relative', width: '100%' }}>
                <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '4rem' }}>Iniciando Motor 3D...</div>}>
                  <Bus3DViewer />
                </Suspense>
              </div>
            </div>
          </div>
          
          <div className="hero-text-wrapper animate-fade-up">
            <h1 className="hero-title">
              Domina tu taller con <br />
              <span className="text-gradient">precisión extrema</span>
            </h1>
            <p className="hero-description delay-1">
              Tunea tu Tarro integra órdenes de compra, control de inventario en tiempo real y flujo de trabajo mecánico en una sola plataforma rápida y poderosa.
            </p>
            <div className="hero-actions delay-2">
              <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                Comenzar Ahora
              </button>
              <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                Ver Demo
              </button>
            </div>
            <div className="hero-stats delay-3">
              <div className="stat">
                <span className="stat-number">300%</span>
                <span className="stat-label">Más Eficiencia</span>
              </div>
              <div className="stat">
                <span className="stat-number">0</span>
                <span className="stat-label">Pérdida de Piezas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
