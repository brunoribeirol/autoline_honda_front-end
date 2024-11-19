import React, { useState } from "react";
import { createBranch } from "../../services/BranchService";
import { useNavigate } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";


const ViewBranchDetailsPage: React.FC = () => {

    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                p: 2,
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
        >
            <TableContainer>
                <Button variant="contained">Endereço</Button>
                <Button variant="contained">Metas</Button>
                <Button variant="contained">Funcionários</Button>
                <Button variant="contained">Vendas</Button>
                 {/* Specification dentro de carro */}
                <Button variant="contained">Carros</Button>
                 {/* CustomerPhone dentro de cliente */}
                 {/* TradeInCredit dentro de cliente */}
                <Button variant="contained">Clientes</Button>               
            </TableContainer>
        </Stack>

    




    );
};

export default ViewBranchDetailsPage;