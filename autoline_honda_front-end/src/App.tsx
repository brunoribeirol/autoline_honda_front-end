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

        {/* Goals */}
        <Route path="/goals/:cnpj/" element={<ListGoals />} />
        <Route path="/goals/:cnpj/add" element={<AddGoal />} />
        <Route path="/goals/:cnpj/:goalId/edit" element={<EditGoal />} />

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
        <Route path="/add-cars" element={<AddCar />} />
        {/* <Route path="/cars/:carChassis/edit" element={<EditCar />} /> */}

        {/* Customers */}
        <Route path="/customers/:cnpj" element={<ListCustomers />} />
        <Route path="/customers/:cnpj/add" element={<AddCustomer />} />
        <Route path="/customers/:cnpj/:cpf/edit" element={<EditCustomer />} />
        
      </Routes>
    </main>
      <FooterComponent />
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





