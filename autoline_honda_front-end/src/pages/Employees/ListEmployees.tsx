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
  branchCnpj: string;
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

  const getAllEmployees = async () => {
    try {
      const response = await getEmployees();
      if (response && response.data) {
        const filteredEmployees = response.data.filter(
          (employee: Employee) => employee.branchCnpj === cnpj
        );
        setEmployees(filteredEmployees);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const removeEmployee = async (cpf: string) => {
    try {
      await deleteEmployee(cpf);
      console.log(`Employee with CPF ${cpf} deleted successfully.`);
      getAllEmployees(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Funcionários
      </h2>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => navigate("/add-employee")}
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
                <TableCell>{employee.salary.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<Edit />}
                      onClick={() => navigate(`/edit-employee/${employee.cpf}`)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => removeEmployee(employee.cpf)}
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
