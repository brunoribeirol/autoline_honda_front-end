import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5", // Fundo geral mais claro
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          borderRadius: 2,
          boxShadow: 1, // Sombras mais suaves
          padding: 4,
          maxWidth: 400,
          backgroundColor: "#ffffffb3", // Branco translúcido para combinar
        }}
      >
        {/* Título */}
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", mb: 3 }}
        >
          Sistema de Gestão de Concessionárias
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Gerencie suas filiais com facilidade e eficiência.
        </Typography>

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
          <button
            className="btn btn-success"
            onClick={() => navigate("/clients")}
          >
            Gerenciar Clientes
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
