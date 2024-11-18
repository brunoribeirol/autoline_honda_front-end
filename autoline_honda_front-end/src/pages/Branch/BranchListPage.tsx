import React, { useEffect, useState } from "react";
import { listBranches } from "../../services/BranchService";
import { useNavigate } from "react-router-dom";

type Branch = {
  cnpj: string;
  name: string;
};

const BranchListPage: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]); // Ensure initial state is an empty array
  const navigate = useNavigate();

  useEffect(() => {
    listBranches()
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBranches(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching branches:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center">Concessionárias</h2>
      <button className="btn btn-secondary mx-2" onClick={() => navigate("/add-branch")}>
        Adicionar Concessionária
      </button>
      <table className="table table-striped table-bordered border-dark">
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {branches.length > 0 ? (
            branches.map((branch) => (
              <tr key={branch.cnpj}>
                <td>{branch.cnpj}</td>
                <td>{branch.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Nenhuma concessionária encontrada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BranchListPage;
