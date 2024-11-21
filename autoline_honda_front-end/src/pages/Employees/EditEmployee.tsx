import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../../services/Employees";
import { Button } from "@mui/material";

const EditEmployee: React.FC = () => {
  const { cnpj, cpf } = useParams<{ cnpj: string; cpf: string }>(); // Recebe cnpj e cpf da URL
  const [employee, setEmployee] = useState({
    cnpj: "",
    cpf: "",
    name: "",
    salary: 0,
    position: "",
    supervisorCpf: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    salary: false,
    position: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (cnpj && cpf) {
      getEmployee(cnpj, cpf) // Busca o funcionário com base no CPF
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
          alert("Erro ao carregar os dados do funcionário.");
        });
    }
  }, [cnpj, cpf]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

        // Simples validação
        const newErrors = {
          name: !employee.name.trim(),
          salary: employee.salary <= 0,
          position: !employee.position.trim(),
        };
        setErrors(newErrors);
    
        if (Object.values(newErrors).some((error) => error)) {
          alert("Por favor, preencha todos os campos obrigatórios.");
          return;
        }

    updateEmployee(employee.cnpj, employee.cpf, employee) // Atualiza os dados
      .then(() => {
        console.log("Funcionário atualizado com sucesso!");
        navigate(`/employees/${cnpj}`);// Retorna à lista de funcionários
      })
      .catch((error) => {
        console.error("Erro ao atualizar funcionário:", error);
        alert("Erro ao atualizar funcionário.");
      });
  };

  return (
    <div className="container">
      <h2 className="text-center">Editar Funcionário</h2>
      <form onSubmit={handleUpdate}>
        {/* CPF */}
        <div className="form-group mb-3">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={employee.cpf || ""}
            disabled
            className="form-control"
          />
        </div>
        {/* Nome */}
        <div className="form-group mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={employee.name}
            onChange={(e) =>
              setEmployee((prev) => ({ ...prev, name: e.target.value }))
            }
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">O nome é obrigatório.</div>
          )}
        </div>
        {/* Salário */}
        <div className="form-group mb-3">
          <label htmlFor="salary">Salário:</label>
          <input
            type="number"
            id="salary"
            value={employee.salary}
            onChange={(e) =>
              setEmployee((prev) => ({
                ...prev,
                salary: Number(e.target.value),
              }))
            }
            className={`form-control ${errors.salary ? "is-invalid" : ""}`}
          />
          {errors.salary && (
            <div className="invalid-feedback">
              O salário deve ser maior que zero.
            </div>
          )}
        </div>
        {/* Cargo */}
        <div className="form-group mb-3">
          <label htmlFor="position">Cargo:</label>
          <select
            id="position"
            value={employee.position}
            onChange={(e) =>
              setEmployee((prev) => ({ ...prev, position: e.target.value }))
            }
            className={`form-control ${errors.position ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um cargo</option>
            <option value="Gerente">Gerente</option>
            <option value="Vendedor">Vendedor</option>
          </select>
          {errors.position && (
            <div className="invalid-feedback">O cargo é obrigatório.</div>
          )}
        </div>
        {/* Botões */}
        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            variant="contained"
            className="btn btn-primary me-2"
          >
            Atualizar
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => navigate(`/employees/${cnpj}`)}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
