import React, { useEffect, useState } from "react";
import { deleteBranch, getBranches } from "../../services/Branch";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

type Branch = {
  cnpj: string;
  name: string;
};

const ListBranches: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBranches();
  }, []);

  function getAllBranches() {
    getBranches()
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // function updateBranch(cnpj: string) {
  //   // Placeholder for edit functionality
  //   console.log(`Editing branch with CNPJ: ${cnpj}`);
  //   navigate(`/edit-branch/${cnpj}`); // Navigate to the edit page
  // }

  function removeBranch(cnpj: string) {
    console.log("Deleting branch with CNPJ:", cnpj);

    deleteBranch(cnpj)
      .then(() => {
        console.log(`Branch with CNPJ ${cnpj} deleted successfully.`);
        getAllBranches();
      })
      .catch((error) => {
        console.error("Error deleting branch:", error);
      });
  }

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Concessionárias
      </h2>
      <Stack direction="row">
      <button
          type="button"
          className="btn btn-warning ml-2"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => navigate("/add-branch")}
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
                {" "}
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CNPJ
                </Typography>{" "}
              </TableCell>
              <TableCell variant="head" align="left">
                {" "}
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  NOME
                </Typography>{" "}
              </TableCell>
              <TableCell variant="head" align="right">
                {" "}
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  AÇÔES
                </Typography>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {branches.map((branch) => (
              <TableRow
                key={branch.cnpj}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {branch.cnpj}
                </TableCell>
                <TableCell align="left">{branch.name}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" justifyContent="right" spacing={8}>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        startIcon={<Edit />}
                        onClick={() => {
                          console.log(
                            "Navigating to edit page with CNPJ:",
                            branch.cnpj
                          ); // Debug log
                          navigate(`/edit-branch/${branch.cnpj}`);
                        }}
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
                              "Are you sure you want to delete this branch?"
                            )
                          ) {
                            removeBranch(branch.cnpj);
                          }
                        }}
                      >
                        Apagar
                      </Button>
                    </Stack>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        console.log(
                          "Navigating to view page with CNPJ:",
                          branch.cnpj
                        ); // Debug log
                        navigate(`/view-branch/${branch.cnpj}`);
                      }}
                    >
                      <Visibility />
                    </IconButton>
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

export default ListBranches;
