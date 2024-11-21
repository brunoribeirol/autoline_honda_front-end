import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">
          Bem-vindo ao Sistema de Gestão de Concessionárias
        </h1>
        <p className="hero-subtitle">
          Gerencie suas filiais, funcionários e vendas de forma eficiente e
          integrada.
        </p>
      </header>

      {/* Main Actions */}
      <div className="main-actions">
        <h2 className="section-title">O que você gostaria de fazer?</h2>
        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/branches")}
          >
            Gerenciar Filiais
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/cars")}
          >
            Gerenciar Carros
          </button>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="info-section">
        <h2 className="section-title">Por que usar nosso sistema?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Controle Completo</h3>
            <p>
              Mantenha o controle total sobre suas filiais, estoque e vendas em
              tempo real.
            </p>
          </div>
          <div className="info-card">
            <h3>Relatórios Inteligentes</h3>
            <p>
              Obtenha relatórios detalhados para tomar decisões mais
              inteligentes e rápidas.
            </p>
          </div>
          <div className="info-card">
            <h3>Gestão Simplificada</h3>
            <p>
              Facilite a gestão do dia a dia com uma interface amigável e
              intuitiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;