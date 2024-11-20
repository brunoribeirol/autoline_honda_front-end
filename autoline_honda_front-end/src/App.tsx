import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, Stack } from "@mui/material";
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
import EditGoal from "./pages/Goals/EditGoal";
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
import EditCar from "./pages/Car/EditCar";
//Customers
import ListCustomers from "./pages/Customer/ListCustomers";
import AddCustomer from "./pages/Customer/AddCustomer";
import EditCustomer from "./pages/Customer/EditCustomer";

// Layout that wraps the common Header and Footer
const Layout = () => (
  <>
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

        {/* <Route path="/branches" element={<ListBranches />} />
        <Route path="/branches/add" element={<AddBranch />} />
        <Route path="/branches/:cnpj" element={<DetailsBranch />} />
        <Route path="/branches/:cnpj/edit" element={<EditBranch />} /> */}

        {/* Goals */}
        <Route path="/goals/:cnpj" element={<ListGoals />} />
        <Route path="/goals/:cnpj/add" element={<AddGoal />} />
        <Route path="/goals/:cnpj/:goalId/edit" element={<EditGoal />} />

        {/* <Route path="/branches/:cnpj/goals" element={<ListGoals />} />
        <Route path="/branches/:cnpj/goals/add" element={<AddGoal />} />
        <Route path="/branches/:cnpj/goals/:goalId/edit" element={<EditGoal />} /> */}

        {/* Employees */}
        <Route path="/branches/:cnpj/employees" element={<ListEmployees />} />
        <Route path="/branches/:cnpj/employees/add" element={<AddEmployee />} />
        <Route path="/branches/:cnpj/employees/:cpf/edit" element={<EditEmployee />} />

        {/* Sales */}
        <Route path="/branches/:cnpj/sales" element={<ListSales />} />
        <Route path="/branches/:cnpj/sales/add" element={<AddSale />} />
        <Route path="/branches/:cnpj/employees/:saleId/edit" element={<EditSale/>} />

        {/* Cars */}
        <Route path="branches/:cnpj/cars" element={<ListCars />} />
        <Route path="/branches/:cnpj/cars/add" element={<AddCar />} />
        <Route path="/branches/:cnpj/cars/:carChassis/edit" element={<EditCar />} />

        {/* Customers */}
        <Route path="branches/:cnpj/customers" element={<ListCustomers />} />
        <Route path="/branches/:cnpj/customers/add" element={<AddCustomer />} />
        <Route path="/branches/:cnpj/customers/:cpf/edit" element={<EditCustomer />} />
        
      </Routes>
    </main>
    <Box>
      <FooterComponent />
    </Box>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
