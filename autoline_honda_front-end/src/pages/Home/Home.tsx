import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1>Bem-vindo ao Sistema de Gestão de Concessionárias</h1>
      <p>
        Aqui você pode gerenciar todas as suas concessionárias, incluindo a criação, atualização, visualização e exclusão.
      </p>
      <div className="mt-4">
        <button className="btn btn-primary mx-2" onClick={() => navigate("/branches")}>
          Gerenciar Concessionárias
        </button>
      </div>
    </div>
  );
};

export default Home;
