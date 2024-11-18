import React, { useEffect, useState } from "react";
import { listBranches } from "../services/BranchService";
import { useNavigate } from "react-router-dom";

type Branch = {
  cnpj: string;
  name: string;
};

const BranchListPage: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    listBranches()
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewBranch() {
    navigate("/add-branch");
  }

  return (
    <div>
      <h2 className="text-center">Concessionárias</h2>
      <button className="btn btn-dark mb-2" onClick={addNewBranch}>
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
          {branches.map((branch) => (
            <tr key={branch.cnpj}>
              <td>{branch.cnpj}</td>
              <td>{branch.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BranchListPage;
