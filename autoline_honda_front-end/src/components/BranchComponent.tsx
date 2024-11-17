import React, {useEffect, useState} from "react";
import { listBranches } from "../services/BranchService";

// // Define a type for the branch data
// type Branch = {
//     cnpj: string;
//     name: string;
//   };

// const BranchComponent: React.FC = () => {
//     // Add type annotation for the data
//     const dummyData: Branch[] = [

const BranchComponent = () => {

    const [branches, setBranches] = useState([])

    useEffect(() => {
        listBranches().then((response) => {
            setBranches(response.data);
        }).catch(error => {
            console.error(error)
        })

    }, [])


  return (
    <div className="container">
      <h2 className="text-center">Concessionárias</h2>
      <table className="table table-striped table-bordered border-dark">
        {/* <caption>Lista de Concessionárias e seus CNPJs</caption> */}
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

export default BranchComponent;


// import React, { useEffect, useState } from "react";
// import { listBranches } from "../services/BranchService";

// // Define a type for the branch data
// type Branch = {
//   cnpj: string;
//   name: string;
// };

// const BranchComponent: React.FC = () => {
//   // Add type annotation for the state
//   const [branches, setBranches] = useState<Branch[]>([]);

//   useEffect(() => {
//     listBranches()
//       .then((response) => {
//         setBranches(response.data); // Assumes `response.data` is of type Branch[]
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="text-center">Concessionárias</h2>
//       <table className="table table-striped table-bordered border-dark">
//         {/* <caption>Lista de Concessionárias e seus CNPJs</caption> */}
//         <thead>
//           <tr>
//             <th>CNPJ</th>
//             <th>Nome</th>
//           </tr>
//         </thead>
//         <tbody>
//           {branches.map((branch) => (
//             <tr key={branch.cnpj}>
//               <td>{branch.cnpj}</td>
//               <td>{branch.name}</td> {/* Correct order of data */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BranchComponent;
