import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Stack,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import { AddCircle, Edit, Delete, Visibility } from "@mui/icons-material";
import Dashboard from "../../components/Dashboard/Dashboard";


const DetailsBranch: React.FC = () => {
  const { cnpj } = useParams<{ cnpj: string }>(); // Capture 'cnpj' parameter from URL
  const navigate = useNavigate();

  const [branchName, setBranchName] = useState<string>(""); // Inicializa o estado do nome da branch

  useEffect(() => {
    if (cnpj) {
      getBranch(cnpj)
        .then((response) => {
          if (response.data) {
            setBranchName(response.data.name || "Concessionária Desconhecida"); // Atualiza o nome da branch
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar os detalhes da branch:", error);
          setBranchName("Concessionária Não Encontrada");
        });
    }
  }, [cnpj]);

  return (
    <Stack sx={{ padding: 3, backgroundColor: "#fff", minHeight: "100vh"}} spacing={6}>
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
          {branchName}
        </Typography>
        <Typography variant="h6" sx={{ color: "#4A4A4A" }}>
          Explore the branch functionalities below.
        </Typography>
      </Box>

      {/* Navigation Buttons Section */}
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
        <Grid container spacing={3} justifyContent="center">
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
              Gerenciar Metas
            </Typography>
          </Grid>

          {/* Manage Employees */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate(`/employees/${cnpj}`)}
              sx={{
                backgroundColor: "#8BC34A",
                "&:hover": {
                  backgroundColor: "#7CB342",
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
              Gerenciar Funcionários
            </Typography>
          </Grid>          
        </Grid>
      </Paper>

      <Dashboard/>

      <Divider sx={{ marginY: 3 }} />
    </Stack>
  );
};

export default DetailsBranch;