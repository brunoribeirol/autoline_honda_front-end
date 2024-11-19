import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">
          Bem-vindo ao Sistema de Gestão de Concessionárias
        </h1>
        <p className="hero-subtitle">
          Gerencie suas filiais, funcionários e vendas de forma eficiente e
          integrada.
        </p>
      </header>

      {/* Main Actions */}
      <div className="main-actions">
        <h2 className="section-title">O que você gostaria de fazer?</h2>
        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/branches")}
          >
            Gerenciar Filiais
          </button>
          {/* <button className="btn btn-secondary" onClick={() => navigate("/sales")}>
            Gerenciar Vendas
          </button>
          <button className="btn btn-success" onClick={() => navigate("/employees")}>
            Gerenciar Funcionários
          </button> */}
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="info-section">
        <h2 className="section-title">Por que usar nosso sistema?</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>Controle Completo</h3>
            <p>
              Mantenha o controle total sobre suas filiais, estoque e vendas em
              tempo real.
            </p>
          </div>
          <div className="info-card">
            <h3>Relatórios Inteligentes</h3>
            <p>
              Obtenha relatórios detalhados para tomar decisões mais
              inteligentes e rápidas.
            </p>
          </div>
          <div className="info-card">
            <h3>Gestão Simplificada</h3>
            <p>
              Facilite a gestão do dia a dia com uma interface amigável e
              intuitiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import axios from "axios";
// import "./Home.css";

// const HomePage: React.FC = () => {
//   const navigate = useNavigate();
//   const [rows, setRows] = useState<any[]>([]);

//   // Buscando dados do banco de dados (usando uma API como exemplo)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/branches"); // Supondo que sua API esteja disponível neste endpoint
//         setRows(response.data);
//       } catch (error) {
//         console.error("Erro ao buscar dados: ", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const columns: GridColDef[] = [
//     { field: "id", headerName: "ID", width: 90 },
//     {
//       field: "name",
//       headerName: "Nome da Filial",
//       width: 150,
//       editable: false,
//     },
//     {
//       field: "location",
//       headerName: "Localização",
//       width: 150,
//       editable: false,
//     },
//     {
//       field: "manager",
//       headerName: "Gerente",
//       width: 150,
//       editable: false,
//     },
//   ];

//   return (
//     <div className="homepage-container">
//       {/* Hero Section */}
//       <header className="hero-section">
//         <h1 className="hero-title">Bem-vindo ao Sistema de Gestão de Concessionárias</h1>
//         <p className="hero-subtitle">
//           Gerencie suas filiais, funcionários e vendas de forma eficiente e integrada.
//         </p>
//       </header>

//       {/* Main Actions - Usando DataGrid para exibir as filiais */}
//       <div className="main-actions">
//         <h2 className="section-title">Filiais</h2>
//         <Box sx={{ height: 400, width: "100%" }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: {
//                   pageSize: 5,
//                 },
//               },
//             }}
//             pageSizeOptions={[5, 10, 20]}
//             checkboxSelection
//             disableRowSelectionOnClick
//           />
//         </Box>
//       </div>

//       {/* Additional Info Section */}
//       <div className="info-section">
//         <h2 className="section-title">Por que usar nosso sistema?</h2>
//         <div className="info-cards">
//           <div className="info-card">
//             <h3>Controle Completo</h3>
//             <p>Mantenha o controle total sobre suas filiais, estoque e vendas em tempo real.</p>
//           </div>
//           <div className="info-card">
//             <h3>Relatórios Inteligentes</h3>
//             <p>Obtenha relatórios detalhados para tomar decisões mais inteligentes e rápidas.</p>
//           </div>
//           <div className="info-card">
//             <h3>Gestão Simplificada</h3>
//             <p>Facilite a gestão do dia a dia com uma interface amigável e intuitiva.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
