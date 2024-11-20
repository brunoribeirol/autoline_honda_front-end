import React, { useEffect, useState } from "react";
import { deleteGoal, getGoals } from "../../services/Goals";
import { useNavigate, useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

type Goal = {
  cnpj: string; // Adicionando cnpj
  goalDate: Date;
  carQuantity: number;
  goalId: number;
};

const ListGoals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const { cnpj } = useParams<{ cnpj: string }>();
  console.log("CNPJ recebido:", cnpj);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (cnpj) {
      getAllGoals();
    }
  }, [cnpj]);

  function getAllGoals() {
    getGoals(cnpj)
      .then((response) => {
        if (response && response.data) {
          console.log("oi");
          const filteredGoals = [];
          for (const goal of response.data) {
            console.log(goal.cnpj);
            if (goal.branchCnpj === cnpj) {
              filteredGoals.push(goal);
            }
            console.log(filteredGoals)
          }
          setGoals(filteredGoals); 
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar metas:", error);
      });
  }
  

  function removeGoal(goalId :number) {
    console.log("Deleting goal with CNPJ:", cnpj);

    deleteGoal(goalId)
      .then(() => {
        console.log(`Goal with CNPJ ${cnpj} deleted successfully.`);
        getAllGoals();
      })
      .catch((error) => {
        console.error("Error deleting goal:", error);
      });
  }


  // function removeBranch(cnpj: string) {
  //   console.log("Deleting branch with CNPJ:", cnpj);

  //   deleteBranch(cnpj)
  //     .then(() => {
  //       console.log(`Branch with CNPJ ${cnpj} deleted successfully.`);
  //       getAllBranches();
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting branch:", error);
  //     });
  // }





  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Metas
      </h2>
      <Stack direction="row">
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => navigate(`/goals/${cnpj}/add`)}
          size="large"
          sx={{
            "&:hover": {
              scale: 1.1,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            },
            transition: "0.25s",
          }}
        >
          Adicionar
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell variant="head">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  ID META
                </Typography>
              </TableCell>
              <TableCell variant="head">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  DATA META
                </Typography>
              </TableCell>
              <TableCell variant="head" align="left">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  QUANTIDADE CARROS
                </Typography>
              </TableCell>
              <TableCell variant="head" align="right">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  AÇÕES
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {goals.map((goal) => (
              <TableRow
                key={goal.cnpj}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{goal.goalId}</TableCell>
                <TableCell component="th" scope="row">
                  {goal.goalDate} {/* Formatação da data */}
                </TableCell>
                <TableCell align="left">{goal.carQuantity}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" justifyContent="right" spacing={8}>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        startIcon={<Edit />}
                        onClick={() => {
                          console.log(
                            "Navigating to edit page with CNPJ:",
                            goal.cnpj
                          ); // Debug log
                          navigate(`/edit-goal/${goal.cnpj}`);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        startIcon={<Delete />}
                        onClick={() => removeGoal(goal.cnpj)} // Corrigido nome da função
                      >
                        Apagar
                      </Button>
                    </Stack>
                    {/* <IconButton
                      aria-label="view"
                      onClick={() => {
                        console.log(
                          "Navigating to view page with CNPJ:",
                          goal.cnpj
                        ); // Debug log
                        navigate(`/view-goal/${goal.cnpj}`);
                      }}
                    >
                      <Visibility />
                    </IconButton> */}
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

export default ListGoals;
