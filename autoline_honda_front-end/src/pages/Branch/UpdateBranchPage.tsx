import React, { useEffect, useState } from "react";
import {
  deleteBranch,
  getBranches,
  updateBranch,
} from "../../services/BranchService"; // Rename import for clarity
import { useNavigate } from "react-router-dom";

type Branch = {
  cnpj: string;
  name: string;
};

const BranchListPage: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const navigate = useNavigate();

  const {cnpj} = useParams();
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

  function pageTitle() {
    if(cnpj) {
      return  <h2 className="text-center">Editar Concessionária</h2>
    } else {
      return <h2 className="text-center">A Concessionária</h2>
    }
  }

    return (
      <div className="container">
        <br />
        <br />
        <h2 className="text-center">Concessionárias</h2>
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                {/* CNPJ Field */}
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="cnpj">CNPJ</label>
                  <input
                    type="text"
                    id="cnpj"
                    placeholder="00000000000000"
                    name="cnpj"
                    value={cnpj}
                    className={`form-control ${errors.cnpj ? 'is-invalid' : ''}`}
                    onChange={(e) => setCnpj(e.target.value)} // Update CNPJ state
                  />
                  {errors.cnpj && <div className="invalid-feedback">{errors.cnpj}</div>}
                </div>
    
                {/* Name Field */}
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nome"
                    name="name"
                    value={name}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    onChange={(e) => setName(e.target.value)} // Update Name state
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
    
                {/* Submit Button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveBranch}
                >
                  Salvar Concessionária
                </button>
              </form>
            </div>
          </div>
        </div>
    
        {/* Add Branch Button */}
        <div className="my-4">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/add-branch")}
          >
            Adicionar Concessionária
          </button>
        </div>
    
        {/* Branches Table */}
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
                      className="btn btn-info me-2"
                      onClick={() => updateBranch(branch.cnpj)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeBranch(branch.cnpj)}
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
    

export default BranchListPage;