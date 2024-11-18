import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import BranchListPage from "./pages/BranchListPage";
import AddBranchPage from "./pages/AddBranchPage";

// Layout que envolve o Header e Footer comuns
const Layout = () => (
  <>
    <HeaderComponent />
    <main className="container">
      <Routes>
        <Route path="/" element={<BranchListPage />} />
        <Route path="/branches" element={<BranchListPage />} />
        <Route path="/add-branch" element={<AddBranchPage />} />
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
