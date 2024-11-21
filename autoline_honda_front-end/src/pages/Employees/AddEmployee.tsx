import React, { useState } from "react";
import { createEmployee } from "../../services/Employees";
import { useNavigate, useParams } from "react-router-dom";
// import {
//   validateCNPJ,
//   validateZipCode,
//   validateForm,

// } from "../../utils/validationBranch";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const AddEmployee: React.FC = () => {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [position, setPosition] = useState("");
  const [supervisorCpf, setSupervisorCpf] = useState("");
  const { cnpj } = useParams<{ cnpj: string }>(); // Get CNPJ from route params

  const [errors, setErrors] = useState({
    cpf: "",
    name: "",
    salary: "",
    position: "",
    cnpj: "",
    supervisorCpf: "",
  });

  const navigate = useNavigate();

  const validateCPF = (cpf: string) => {
    if (!cpf) {
      return "O campo 'CPF' é obrigatório.";
    }
    const regex = /^\d{11}$/;
    if (!regex.test(cpf)) {
      return "Por favor, insira um CPF válido (11 dígitos).";
    }
    return null;
  };
  
  const validateForm = () => {
    let valid = true;
    const errorsCopy = {
      cpf: "",
      name: "",
      salary: "",
      position: "",
      cnpj: "",
      supervisorCpf: "",
    };
  
    // Validação do CPF
    const cpfError = validateCPF(cpf);
    if (cpfError) {
      errorsCopy.cpf = cpfError;
      valid = false;
    }
  
    // Validação do Nome
    if (!name.trim()) {
      errorsCopy.name = "O campo 'Nome' é obrigatório.";
      valid = false;
    }
  
    // Validação do Salário
    if (!salary.trim()) {
      errorsCopy.salary = "O campo 'Salário' é obrigatório.";
      valid = false;
    }
  
    // Validação do Cargo
    if (!position.trim()) {
      errorsCopy.position = "O campo 'Posição' é obrigatório.";
      valid = false;
    }
  
    // Validação do CNPJ
    if (!cnpj) {
      errorsCopy.cnpj = "O campo 'CNPJ' é obrigatório.";
      valid = false;
    }
  
    // Validação opcional do Supervisor
    if (supervisorCpf && !/^\d{11}$/.test(supervisorCpf)) {
      errorsCopy.supervisorCpf = "Por favor, insira um CPF válido para o Supervisor.";
      valid = false;
    }
  
    // Atualiza os erros no estado
    setErrors(errorsCopy);
    return valid;
  };
  
  const saveEmployee = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validateForm()) {
      const employee = {
        cpf,
        name,
        salary: Number(salary),
        position,
        cnpj,
        supervisorCpf: supervisorCpf || null,
      };
  
      console.log("Employee data:", employee);
  
      createEmployee(employee)
        .then((response) => {
          console.log("Funcionário criado com sucesso:", response.data);
          navigate(`/employees/${cnpj}`);
        })
        .catch((error) => {
          console.error(
            "Erro ao criar o funcionário:",
            error.response?.data || error.message
          );
        });
    }
  };
  
  return (
    <div className="container">
      <h2 className="text-center">Adicionar Funcionário</h2>
      <form onSubmit={saveEmployee}>
        {/* CPF */}
        <div className="form-group mb-3">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className={`form-control ${errors.cpf ? "is-invalid" : ""}`}
          />
          {errors.cpf && <div className="invalid-feedback">{errors.cpf}</div>}
        </div>

        {/* Name */}
        <div className="form-group mb-3">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Salary*/}
        <div className="form-group mb-3">
          <label htmlFor="salary">Salário</label>
          <input
            type="number"
            id="salary"
            placeholder="Salário"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className={`form-control ${errors.salary ? "is-invalid" : ""}`}
          />
          {errors.salary && (
            <div className="invalid-feedback">{errors.salary}</div>
          )}
        </div>

        {/* Position */}
        <div className="form-group mb-3">
          <label htmlFor="position">Cargo</label>
          <select
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className={`form-control ${errors.position ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um cargo</option>
            <option value="Gerente">Gerente</option>
            <option value="Vendedor">Vendedor</option>
          </select>
          {errors.position && (
            <div className="invalid-feedback">{errors.position}</div>
          )}
        </div>

        {/* Supervisor CPF */}
        <div className="form-group mb-3">
          <label htmlFor="supervisorCPF">CPF Gerente</label>
          <input
            id="supervisorCpf"
            value={supervisorCpf}
            onChange={(e) => setSupervisorCpf(e.target.value)}
            className={`form-control ${
              errors.supervisorCpf ? "is-invalid" : ""
            }`}
          />
          {errors.supervisorCpf && (
            <div className="invalid-feedback">{errors.supervisorCpf}</div>
          )}
        </div>

        <Stack direction="row" spacing={2}>
        <button
          type="button"
          className="btn btn-warning ml-2"
          onClick={() => navigate(`/employees/${cnpj}`)}
        >
          Voltar
        </button>
          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              "&:hover": {
                scale: 1.1,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              },
              transition: "0.25s",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddEmployee;
