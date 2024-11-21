import React, { useEffect, useState } from "react";
import { getCustomers } from "../../services/Customers";
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

type Customer = {
  cpf: string;
  name: string;
  driverLicense: string;
  birthDate: string; // Date em formato ISO
  neighborhood: string;
  addressNumber: number;
  state: string;
  zipCode: string;
  street: string;
  city: string;
  phoneNumber: {
    phoneNumber: string;
  };
};

const ListCustomers: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCustomers();
  }, []);

  const getAllCustomers = () => {
    getCustomers()
      .then((response) => {
        if (response && response.data) {
          setCustomers(response.data);
        }
      })
      .catch((error) => console.error("Error fetching customers:", error));
  };

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Clientes
      </h2>
      <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
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
          onClick={() => navigate("/add-customer")}
          size="large"
        >
          Adicionar
        </Button>
        
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Customer Table">
          <TableHead>
            <TableRow>
              {[  
                "CPF",
                "NOME",
                "CARTEIRA DE MOTORISTA",
                "DATA DE NASCIMENTO",
                "TELEFONE",
                "CEP",
                "RUA",
                "NÚMERO",
                "BAIRRO",
                "CIDADE",
                "ESTADO",
                "AÇÕES",
              ].map((header) => (
                <TableCell key={header}>
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    {header}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.cpf}>
                <TableCell>{customer.cpf}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.driverLicense}</TableCell>
                <TableCell>
                  {new Date(customer.birthDate).toLocaleDateString()}
                </TableCell>
                {/* <TableCell>{car.specification?.category}</TableCell> */}
                <TableCell>{customer.phoneNumber?.phoneNumber}</TableCell>
                <TableCell>{customer.zipCode}</TableCell>
                <TableCell>{customer.street}</TableCell>
                <TableCell>{customer.addressNumber}</TableCell>
                <TableCell>{customer.neighborhood}</TableCell>
                <TableCell>{customer.city}</TableCell>
                <TableCell>{customer.state}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<Edit />}
                      onClick={() => navigate(`/edit-customer/${customer.cpf}`)}
                    >
                      Editar
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

export default ListCustomers;
