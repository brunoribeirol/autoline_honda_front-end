import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import BranchListPage from "./pages/Branch/BranchListPage";
import AddBranchPage from "./pages/Branch/AddBranchPage";
import EditBranchPage from "./pages/Branch/EditBranchPage";

// Layout que envolve o Header e Footer comuns
const Layout = () => (
  <>
    <HeaderComponent />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/branches" element={<BranchListPage />} />
        <Route path="/add-branch" element={<AddBranchPage />} />
        <Route path="/edit-branch/:cnpj" element={<EditBranchPage />} />
        <Route path="/view-branch/:cnpj" element={<EditBranchPage />} />
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
