import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (to) {
      navigate(to);
    } else {
    }
  };

  return (
    <button className="btn btn-secondary" onClick={handleGoBack}>
      Voltar
    </button>
  );
};

export default BackButton;
