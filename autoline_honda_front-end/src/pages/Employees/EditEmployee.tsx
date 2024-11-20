import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../../services/Employees";
import { Button } from "@mui/material";

const EditEmployee: React.FC = () => {
  const { cnpj, cpf } = useParams<{ cnpj: string; cpf: string }>(); // Recebe cnpj e cpf da URL
  const [employee, setEmployee] = useState({
    cpf: "",
    name: "",
    salary: 0,
    position: "",
    supervisorCpf: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (cnpj && cpf) {
      getEmployee(cpf) // Busca o funcionário com base no CPF
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
    updateEmployee(employee.cpf, employee) // Atualiza os dados
      .then(() => {
        console.log("Funcionário atualizado com sucesso!");
        navigate(`/employees/${cnpj}`); // Retorna à lista de funcionários
      })
      .catch((error) => {
        console.error("Erro ao atualizar funcionário:", error);
        alert("Erro ao atualizar funcionário.");
      });
  };

  return (
    <div>
      <h2>Editar Funcionário</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={employee.name}
            onChange={(e) =>
              setEmployee((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Salário:</label>
          <input
            type="number"
            value={employee.salary}
            onChange={(e) =>
              setEmployee((prev) => ({ ...prev, salary: Number(e.target.value) }))
            }
          />
        </div>
        <div>
          <label>Cargo:</label>
          <select
            value={employee.position}
            onChange={(e) =>
              setEmployee((prev) => ({ ...prev, position: e.target.value }))
            }
          >
            <option value="Gerente">Gerente</option>
            <option value="Vendedor">Vendedor</option>
          </select>
        </div>
        <Button type="submit" variant="contained">
          Salvar
        </Button>
      </form>
    </div>
  );
};

export default EditEmployee;
