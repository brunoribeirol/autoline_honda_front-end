import React from 'react'

const ListCustomers = () => {
  return (
    <div>ListCustomers</div>
  )
}

export default ListCustomers

// import React, { useEffect, useState } from "react";
// import { getCustomers } from "../../services/Customers";
// import { useNavigate, useParams } from "react-router-dom";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, Stack, Typography } from "@mui/material";
// import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

// type Customer = {
//   cpf: string;
//   name: string;
//   driverLicense: string;
//   birthDate: Date;
//   neighborhood: string;
//   addressNumber: number;
//   state: string;
//   zipCode: string;
//   street: string;
//   city: string;
//   phoneNumber: string;
// }

// const ListCustomers: React.FC = () => {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const { cnpj } = useParams<{ cnpj: string }>();
//   const navigate = useNavigate();

//     useEffect(() => {
//     if (cnpj) {
//       getAllCustomers();
//     }
//   }, [cnpj]);

//   function getAllCustomers() {
//     getCustomers(cnpj) //oq é isso??
//       .then((response) => {
//         if (response && response.data) {
//           const filteredCustomers = [];
//           for (const customer of response.data) {
//             console.log(customer.cpf);
//             if (customer.branchCnpj === cpf) {
//               filteredCustomers.push(customer);
//             }
//           }
//           console.log("Filtered customers:", filteredCustomers); // Check the filtered result
//           setCustomers(filteredCustomers);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching customers:", error);
//       });
//   }



//   return (
//     <div>
//       <h2 className="text-center" style={{ margin: "15px" }}>
//         Clientes
//       </h2>
//       <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
//         <Button
//           variant="contained"
//           startIcon={<AddCircle />}
//           onClick={() => navigate(`/customers/${cnpj}/add`)}
//           size="large"
//           sx={{
//             "&:hover": {
//               transform: "scale(1.1)",
//               boxShadow:
//                 "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//             },
//             transition: "0.25s",
//           }}
//         >
//           Adicionar Cliente
//         </Button>
//       </Stack>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="Employee Table">
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   CPF
//                 </Typography>
//               </TableCell>
//               <TableCell>
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Nome
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Carteira de Motorista
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Data de Nascimento
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Telefone
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   CEP
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Rua
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Número
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Bairro
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Cidade
//                 </Typography>
//               </TableCell>
//               <TableCell align="left">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Estado
//                 </Typography>
//               </TableCell>
//               <TableCell align="right">
//                 <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                   Ações
//                 </Typography>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {customers.map((customer) => (
//               <TableRow
//                 key={customer.cpf}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell>{customer.cpf}</TableCell>
//                 <TableCell>{customer.name}</TableCell>
//                 <TableCell>{customer.driverLicense}</TableCell>
//                 <TableCell>{customer.birthDate}</TableCell> /** Date? */
//                 <TableCell>{customer.phoneNumber}</TableCell>
//                 <TableCell>{customer.zipCode}</TableCell>
//                 <TableCell>{customer.street}</TableCell>
//                 <TableCell>{customer.addressNumber}</TableCell>
//                 <TableCell>{customer.neighborhood}</TableCell>
//                 <TableCell>{customer.city}</TableCell>
//                 <TableCell>{customer.state}</TableCell>
//                 <TableCell align="right">
//                   <Stack direction="row" spacing={2} justifyContent="right">
//                     <Button
//                       variant="outlined"
//                       startIcon={<Edit />}
//                       onClick={() => navigate(`/customers/${customer.branchCnpj}/${customer.cpf}`)}
//                     >
//                       Editar
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="error"
//                       startIcon={<Delete />}
//                       onClick={() => removeEmployee(customer.cpf)}
//                     >
//                       Apagar
//                     </Button>
//                   </Stack>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ListCustomers








// import React, { useEffect, useState } from "react";
// import { getCustomers } from "../../services/Customers";
// import { useNavigate } from "react-router-dom";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Button, Stack, Typography } from "@mui/material";
// import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

// type Customer = {
//   cpf: string;
//   name: string;
//   driverLicense: string;
//   birthDate: string; // Keeping as a string for easier formatting
//   neighborhood: string;
//   addressNumber: number;
//   state: string;
//   zipCode: string;
//   street: string;
//   city: string;
//   phoneNumber: string;
// };

// const ListCustomers: React.FC = () => {
//   const [customers, setCustomers] = useState<Customer[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllCustomers();
//   }, []);

//   const getAllCustomers = () => {
//     getCustomers()
//       .then((response) => {
//         if (response && response.data) {
//           setCustomers(response.data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching customers:", error);
//       });
//   };

//   return (
//     <div>
//       <h2 className="text-center" style={{ margin: "15px" }}>
//         Clientes
//       </h2>
//       <Stack direction="row" spacing={2} sx={{ marginBottom: "15px" }}>
//         <Button
//           variant="contained"
//           startIcon={<AddCircle />}
//           onClick={() => navigate(`/customers/add`)}
//           size="large"
//           sx={{
//             "&:hover": {
//               transform: "scale(1.1)",
//               boxShadow:
//                 "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//             },
//             transition: "0.25s",
//           }}
//         >
//           Adicionar Cliente
//         </Button>
//       </Stack>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="Customer Table">
//           <TableHead>
//             <TableRow>
//               {[
//                 "CPF",
//                 "Nome",
//                 "Carteira de Motorista",
//                 "Data de Nascimento",
//                 "Telefone",
//                 "CEP",
//                 "Rua",
//                 "Número",
//                 "Bairro",
//                 "Cidade",
//                 "Estado",
//                 "Ações",
//               ].map((header) => (
//                 <TableCell key={header}>
//                   <Typography variant="body1" style={{ fontWeight: "bold" }}>
//                     {header}
//                   </Typography>
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {customers.map((customer) => (
//               <TableRow
//                 key={customer.cpf}
//                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//               >
//                 <TableCell>{customer.cpf}</TableCell>
//                 <TableCell>{customer.name}</TableCell>
//                 <TableCell>{customer.driverLicense}</TableCell>
//                 <TableCell>
//                   {new Date(customer.birthDate).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell>{customer.phoneNumber}</TableCell>
//                 <TableCell>{customer.zipCode}</TableCell>
//                 <TableCell>{customer.street}</TableCell>
//                 <TableCell>{customer.addressNumber}</TableCell>
//                 <TableCell>{customer.neighborhood}</TableCell>
//                 <TableCell>{customer.city}</TableCell>
//                 <TableCell>{customer.state}</TableCell>
//                 <TableCell align="right">
//                   <Stack direction="row" spacing={2} justifyContent="right">
//                     <Button
//                       variant="outlined"
//                       startIcon={<Edit />}
//                       onClick={() => navigate(`/customers/edit/${customer.cpf}`)}
//                     >
//                       Editar
//                     </Button>
//                     <Button
//                       variant="contained"
//                       color="error"
//                       startIcon={<Delete />}
//                       onClick={() => console.log(`Delete customer ${customer.cpf}`)}
//                     >
//                       Apagar
//                     </Button>
//                   </Stack>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default ListCustomers;
