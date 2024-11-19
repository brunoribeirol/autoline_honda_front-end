import React, { useEffect, useState } from "react";
import { deleteBranch, getBranches } from "../../services/BranchService"; // Rename import for clarity
import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit } from "@mui/icons-material";

type Branch = {
  cnpj: string;
  name: string;
};

const BranchListPage: React.FC = () => {
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
      <h2 className="text-center">Concessionárias</h2>
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/add-branch")}
      >
        Adicionar Concessionária
      </button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="head"> <Typography variant="body1" style={{ fontWeight: "bold" }}>CNPJ</Typography> </TableCell>
            <TableCell variant="head" align="left"> <Typography variant="body1" style={{ fontWeight: "bold" }}>NOME</Typography> </TableCell>
            <TableCell variant="head" align="right"> <Typography variant="body1" style={{ fontWeight: "bold" }}>AÇÔES</Typography> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {branches.map((branch) => (
            <TableRow
              key={branch.cnpj}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                      console.log("Navigating to edit page with CNPJ:", branch.cnpj); // Debug log
                      navigate(`/edit-branch/${branch.cnpj}`);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => removeBranch(branch.cnpj)} // Call the renamed function
                    >
                      Apagar
                    </Button>
                  </Stack>
                  <IconButton 
                    aria-label="delete" 
                    onClick={() => {
                      console.log("Navigating to view page with CNPJ:", branch.cnpj); // Debug log
                      navigate(`/view-branch/${branch.cnpj}`);
                      }}
                    >
                    <Visibility/>
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* <table className="table table-striped table-bordered border-dark">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {branches.length > 0 ? (
            branches.map((branch) => (
              <tr key={branch.cnpj}>
                <td>{branch.cnpj}</td>
                <td>{branch.name}</td>
                <td>
                  <button
                  className="btn btn-info"
                  onClick={() => {
                    console.log("Navigating to edit page with CNPJ:", branch.cnpj); // Debug log
                    navigate(`/edit-branch/${branch.cnpj}`);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeBranch(branch.cnpj)} // Call the renamed function
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                Nenhuma concessionária encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  );
};

export default BranchListPage;