import React, { useState } from "react";
import { createBranch } from "../../services/BranchService";
import { useNavigate } from "react-router-dom";

const AddBranchPage: React.FC = () => {
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({
    cnpj: "",
    name: "",
  });

  const navigate = useNavigate();

  const validateCNPJ = (cnpj: string) => {
    if (!cnpj) {
      return "O campo CNPJ é obrigatório.";
    }
    const regex = /^\d{14}$/; // O CNPJ precisa ter 14 dígitos numéricos sem formatação
    if (!regex.test(cnpj)) {
      return "Por favor, insira um CNPJ válido (apenas números).";
    }
    return null;
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { cnpj: "", name: "" };

    const cnpjError = validateCNPJ(cnpj);
    if (cnpjError) {
      errorsCopy.cnpj = cnpjError;
      valid = false;
    }

    if (!name.trim()) {
      errorsCopy.name = "O nome é obrigatório.";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveBranch = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const cleanedCnpj = removeCNPJFormat(cnpj); // Remover a formatação do CNPJ
      const branch = { cnpj: cleanedCnpj, name };

      createBranch(branch)
        .then((response) => {
          console.log("Concessionária criada com sucesso:", response.data);
          navigate("/branches");
        })
        .catch((error) => {
          console.error("Erro ao criar a concessionária:", error);
        });
    }
  };

  const removeCNPJFormat = (cnpj: string) => {
    return cnpj.replace(/[^\d]+/g, ""); // Remove qualquer coisa que não seja número
  };

  return (
    <div className="container">
      <h2 className="text-center">Adicionar Concessionária</h2>
      <form onSubmit={saveBranch}>
        <div className="form-group mb-3">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            placeholder="00000000000000"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className={`form-control ${errors.cnpj ? "is-invalid" : ""}`}
          />
          {errors.cnpj && <div className="invalid-feedback">{errors.cnpj}</div>}
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da Concessionária"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddBranchPage;
