import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//Footer and Header
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
//Home
import Home from "./pages/Home/Home";
// Branches
import ListBranches from "./pages/Branch/ListBranches";
import AddBranch from "./pages/Branch/AddBranch";
import EditBranch from "./pages/Branch/EditBranch";
import DetailsBranch from "./pages/Branch/DetailsBranch";
// Goals
import ListGoals from "./pages/Goals/ListGoals";
import AddGoal from "./pages/Goals/AddGoal";
//Employees
import ListEmployees from "./pages/Employees/ListEmployees";
import AddEmployee from "./pages/Employees/AddEmployee";
import EditEmployee from "./pages/Employees/EditEmployee";
//Sales
import ListSales from "./pages/Sales/ListSales";
import AddSale from "./pages/Sales/AddSale";
import EditSale from "./pages/Sales/EditSale";
//Cars
import ListCars from "./pages/Car/ListCars";
import AddCar from "./pages/Car/AddCar";
import DetailsCar from "./pages/Car/DetailsCar";
//Customers
import ListCustomers from "./pages/Customer/ListCustomers";
import AddCustomer from "./pages/Customer/AddCustomer";
import EditCustomer from "./pages/Customer/EditCustomer";

// Layout that wraps the common Header and Footer
const Layout = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Ocupa a altura total da tela
    }}
  >
    <HeaderComponent />
    <main className="container">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Home />} /> {/* or a NotFound component */}

        {/* Branches */}
        <Route path="/branches" element={<ListBranches />} />
        <Route path="/add-branch" element={<AddBranch />} />
        <Route path="/edit-branch/:cnpj" element={<EditBranch />} />
        <Route path="/view-branch/:cnpj" element={<DetailsBranch />} />

        {/* Goals */}
        <Route path="/goals/:cnpj/" element={<ListGoals />} />
        <Route path="/goals/:cnpj/add" element={<AddGoal />} />

        {/* Employees */}
        <Route path="/employees/:cnpj" element={<ListEmployees />} />
        <Route path="/employees/:cnpj/add" element={<AddEmployee />} />
        <Route path="/employees/:cnpj/:cpf/edit" element={<EditEmployee />} />

        {/* Sales */}
        <Route path="/sales/:cnpj" element={<ListSales />} />
        <Route path="/sales/:cnpj/add" element={<AddSale />} />
        <Route path="/sales/:cnpj/:saleId/edit" element={<EditSale/>} />

        {/* Cars */}
        <Route path="/cars" element={<ListCars />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/view-car/:carChassis" element={<DetailsCar />} />

        {/* Customers */}
        <Route path="/customers/:cnpj" element={<ListCustomers />} />
        <Route path="/customers/:cnpj/add" element={<AddCustomer />} />
        <Route path="/customers/:cnpj/:cpf/edit" element={<EditCustomer />} />
        
      </Routes>
    </main>
      <FooterComponent />
  </Box>
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      {/* <ThemeProvider theme={darkTheme}> */}
        {/* <CssBaseline /> */}
        <Layout />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;





