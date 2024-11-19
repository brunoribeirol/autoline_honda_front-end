import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import BranchListPage from "./pages/Branch/BranchListPage";
import AddBranchPage from "./pages/Branch/AddBranchPage";
import EditBranchPage from "./pages/Branch/EditBranchPage";
import ViewBranchDetailsPage from "./pages/Branch/ViewBranchDetailsPage";

// Layout that wraps the common Header and Footer
const Layout = () => (
  <>
    <HeaderComponent />
    <main className="container">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Branches */}
        <Route path="/branches" element={<BranchListPage />} />
        <Route path="/add-branch" element={<AddBranchPage />} />
        <Route path="/edit-branch/:cnpj" element={<EditBranchPage />} />
        <Route path="/view-branch/:cnpj" element={<ViewBranchDetailsPage />} />
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Home />} /> {/* or a NotFound component */}
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
