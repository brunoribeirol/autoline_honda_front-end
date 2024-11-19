import React, { useEffect, useState } from "react";
import { deleteBranch, getBranches } from "../../services/BranchService"; // Rename import for clarity
import { useNavigate } from "react-router-dom";

type Branch = {
  cnpj: string;
  name: string;
};

const BranchListPage: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBranches();
  }, []);

  function getAllBranches() {
    getBranches()
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function updateBranch(cnpj: string) {
    // Placeholder for edit functionality
    console.log(`Editing branch with CNPJ: ${cnpj}`);
    navigate(`/edit-branch/${cnpj}`); // Navigate to the edit page
  }

  function removeBranch(cnpj: string) {
    console.log("Deleting branch with CNPJ:", cnpj);
  
    deleteBranch(cnpj)
      .then(() => {
        console.log(`Branch with CNPJ ${cnpj} deleted successfully.`);
        getAllBranches(); 
      })
      .catch((error) => {
        console.error("Error deleting branch:", error);
      });
  }
  

  return (
    <div>
      <h2 className="text-center">Concessionárias</h2>
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/add-branch")}
      >
        Adicionar Concessionária
      </button>
      <table className="table table-striped table-bordered border-dark">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {branches.length > 0 ? (
            branches.map((branch) => (
              <tr key={branch.cnpj}>
                <td>{branch.cnpj}</td>
                <td>{branch.name}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateBranch(branch.cnpj)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeBranch(branch.cnpj)} // Call the renamed function
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                Nenhuma concessionária encontrada
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BranchListPage;
