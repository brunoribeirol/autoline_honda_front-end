import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Box, Stack } from "@mui/material";
// Branches
import ListBranches from "./pages/Branch/ListBranches";
import AddBranch from "./pages/Branch/AddBranch";
import EditBranch from "./pages/Branch/EditBranch";
import DetailsBranch from "./pages/Branch/DetailsBranch";
// Goals
import ListGoals from "./pages/Goals/ListGoals";
import AddGoal from "./pages/Goals/AddGoal";
import EditGoal from "./pages/Goals/EditGoal";

// Layout that wraps the common Header and Footer
const Layout = () => (
  <>
    <HeaderComponent />
    <main className="container">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Branches */}
        <Route path="/branches" element={<ListBranches />} />
        <Route path="/add-branch" element={<AddBranch />} />
        <Route path="/edit-branch/:cnpj" element={<EditBranch />} />
        <Route path="/view-branch/:cnpj" element={<DetailsBranch />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Home />} /> {/* or a NotFound component */}
        {/* Goals */}
        <Route path="/goals/:cnpj" element={<ListGoals />} />
        <Route path="/add-goal" element={<AddGoal />} />
        <Route path="/edit-goal/:goalId" element={<EditGoal />} />
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
