import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Stack,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
} from "@mui/material";
import { AddCircle, Edit, Delete, Visibility } from "@mui/icons-material";

const DetailsBranch: React.FC = () => {
  const { cnpj } = useParams<{ cnpj: string }>(); // Capture 'cnpj' parameter from URL
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "#1a202c",
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 2,
          }}
        >
          {cnpj}
        </Typography>
        <Typography variant="h6" sx={{ color: "#4A4A4A" }}>
          Explore the branch functionalities below.
        </Typography>
      </Box>

      {/* Navigation Buttons Section */}
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
        <Grid container spacing={3} justifyContent="center">
          {/* Manage Addresses */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate(`/address/${cnpj}`)}
              sx={{
                backgroundColor: "#FFEB3B",
                "&:hover": {
                  backgroundColor: "#FDD835",
                },
              }}
            >
              <AddCircle sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Addresses
            </Typography>
          </Grid>

          {/* Manage Goals */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(`/goals/${cnpj}`)}
              sx={{
                backgroundColor: "#3f51b5",
                "&:hover": {
                  backgroundColor: "#303f9f",
                },
              }}
            >
              <Visibility sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Goals
            </Typography>
          </Grid>

          {/* Manage Employees */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate(`/employees/${cnpj}`)}
              sx={{
                backgroundColor: "#8BC34A",
                "&:hover": {
                  backgroundColor: "#7CB342",
                },
              }}
            >
              <Edit sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Employees
            </Typography>
          </Grid>

          {/* Manage Sales */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(`/sales/${cnpj}`)}
              sx={{
                backgroundColor: "#FF9800",
                "&:hover": {
                  backgroundColor: "#FB8C00",
                },
              }}
            >
              <Delete sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Sales
            </Typography>
          </Grid>

          {/* Manage Cars */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate(`/cars/${cnpj}`)}
              sx={{
                backgroundColor: "#9C27B0",
                "&:hover": {
                  backgroundColor: "#8E24AA",
                },
              }}
            >
              <Visibility sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Cars
            </Typography>
          </Grid>

          {/* Manage Clients */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(`/clients/${cnpj}`)}
              sx={{
                backgroundColor: "#2196F3",
                "&:hover": {
                  backgroundColor: "#1976D2",
                },
              }}
            >
              <AddCircle sx={{ marginRight: 1 }} />
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ marginTop: 1, color: "#4A4A4A" }}
            >
              Manage Clients
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Divider sx={{ marginY: 3 }} />
    </Box>
  );
};

export default DetailsBranch;


// import React, { useState } from "react";
// import { createBranch } from "../../services/Branch";
// import { useNavigate, useParams } from "react-router-dom";


// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import {
//   Button,
//   ButtonGroup,
//   IconButton,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

// const DetailsBranch: React.FC = () => {
//   const { cnpj } = useParams<{ cnpj: string }>(); // Captura o parâmetro 'cnpj' da URL
//   const navigate = useNavigate();

//   return (
//     <ButtonGroup variant="contained" aria-label="Basic button group">
//       <Stack direction="row" spacing={2} alignContent="center">
//         <Button variant="contained">Endereço</Button>
//         <Button
//           variant="contained"
//           onClick={() => {
//             navigate(`/goals/${cnpj}`);
//           }}
//         >
//           Metas
//         </Button>
//         <Button variant="contained">Funcionários</Button>
//         <Button variant="contained">Vendas</Button>
//         {/* Specification dentro de carro */}
//         <Button variant="contained">Carros</Button>
//         {/* CustomerPhone dentro de cliente */}
//         {/* TradeInCredit dentro de cliente */}
//         <Button variant="contained">Clientes</Button>
//       </Stack>
//     </ButtonGroup>
//   );
// };

// export default DetailsBranch;

