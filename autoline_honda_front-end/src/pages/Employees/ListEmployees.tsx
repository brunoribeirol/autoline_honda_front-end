import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployees } from "../../services/Employees";
import { useNavigate, useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

type Employee = {
  cpf: string;
  name: string;
  salary: number;
  position: string;
  cnpj: string;
  supervisorCpf: string;
};

const ListEmployees: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const { cnpj } = useParams<{ cnpj: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (cnpj) {
      getAllEmployees();
    }
  }, [cnpj]);

  function getAllEmployees() {
    if (!cnpj) {
      console.error("CNPJ está undefined, verifique a rota ou os parâmetros.");
      return;
    }
    getEmployees(cnpj)
      .then((response) => {
        if (response && response.data) {
          const filteredEmployees = [];
          for (const employee of response.data) {
            console.log(employee.cnpj);
            if (employee.branchCnpj === cnpj) {
              filteredEmployees.push(employee);
            }
          }
          console.log("Filtered employees:", filteredEmployees); // Check the filtered result
          setEmployees(filteredEmployees);
        }
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }

  function removeEmployee(cpf: string) {
    if (!cnpj) {
      console.error("CNPJ is missing");
      return;
    }

    console.log("Deleting employee with CPF:", cpf);
    deleteEmployee(cnpj, cpf)
    //deleteEmployee(cpf)
      .then(() => {
        console.log(`Employee with CPF ${cpf} deleted successfully.`);
        getAllEmployees();
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  }

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Funcionários
      </h2>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
      <button
          type="button"
          className="btn btn-warning ml-2"
          onClick={() => navigate(`/view-branch/${cnpj}`)}
        >
          Voltar
        </button>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => navigate(`/employees/${cnpj}/add`)}
          size="large"
          sx={{
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            },
            transition: "0.25s",
          }}
        >
          Adicionar Funcionário
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Employee Table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CPF
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Nome
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Salário
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Posição
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Ações
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow
                key={employee.cpf}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{employee.cpf}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>
                  {employee.salary.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} justifyContent="right">
                    <Button
                      variant="outlined"
                      startIcon={<Edit />}
                      onClick={() =>
                        navigate(`/employees/${cnpj}/${employee.cpf}/edit`)
                      }
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Tem certeza de que deseja excluir este funcionário?"
                          )
                        ) {
                          removeEmployee(employee.cpf);
                        }
                      }}
                    >
                      Apagar
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListEmployees;
