import React, { useState, useEffect } from "react";
import { getBranch, updateBranch } from "../../services/BranchService";
import { useNavigate, useParams } from "react-router-dom";

const EditBranchPage: React.FC = () => {
  const { cnpj } = useParams<{ cnpj: string }>(); // Get CNPJ from route params
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: "" });
  const navigate = useNavigate();

  useEffect(() => {
    console.log("CNPJ from route params:", cnpj); // Debug log

    if (cnpj) {
      getBranch(cnpj) // Pass the cnpj directly
        .then((response) => {
          console.log("Fetched branch details:", response.data); // Debug log
          if (response.data) {
            setName(response.data.name); // Set the branch's name
          } else {
            throw new Error("Branch not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching branch details:", error);
          alert("Concessionária não encontrada.");
          navigate("/branches");
        });
    } else {
      console.error("CNPJ is undefined. Redirecting...");
      navigate("/branches");
    }
  }, [cnpj]);

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { name: "" };

    if (!name.trim()) {
      errorsCopy.name = "O nome é obrigatório.";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const updateBranchDetails = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedBranch = { name };

      updateBranch(cnpj!, updatedBranch) // Pass cnpj separately
        .then((response) => {
          console.log("Branch updated successfully:", response);
          navigate("/branches");
        })
        .catch((error) => {
          console.error("Error updating branch:", error);
          alert("Erro ao atualizar a concessionária.");
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Editar Concessionária</h2>
      <form onSubmit={updateBranchDetails}>
        <div className="form-group mb-3">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            value={cnpj || ""}
            disabled // CNPJ cannot be edited
            className="form-control"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da Concessionária"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Atualizar
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={() => navigate("/branches")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditBranchPage;




// import React, { useState, useEffect } from "react";
// import { getBranch, updateBranch } from "../../services/BranchService";
// import { useNavigate, useParams } from "react-router-dom";

// const EditBranchPage: React.FC = () => {
//   const { cnpj } = useParams<{ cnpj: string }>(); // Get CNPJ from route params
//   const [name, setName] = useState("");
//   const [errors, setErrors] = useState({ name: "" });
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   console.log("CNPJ from route params:", cnpj); // Debug log
  
//   //   if (cnpj) {
//   //     console.log("Fetching branch with CNPJ:", cnpj);
  
//   //     getBranch(cnpj)
//   //       .then((data) => {
//   //         console.log("Fetched branch details:", data); // Debug log
//   //         setName(data.name);
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error fetching branch details:", error);
//   //         //alert("Concessionária não encontrada.");
//   //         navigate("/branches");
//   //       });
//   //   } else {
//   //     console.error("CNPJ is undefined. Redirecting...");
//   //     navigate("/branches");
//   //   }
//   // }, [cnpj]);
//   useEffect(() => {
//     console.log("CNPJ from route params:", cnpj); // Debug log
//     if (cnpj) {
//       getBranch(cnpj) // Pass the cnpj directly
//         .then((response) => {
//           console.log("Fetched branch details:", response.data); // Debug log
//           if (response.data) {
//             setName(response.data.name);
//           } else {
//             throw new Error("Branch not found");
//           }
//         })
//         .catch((error) => {
//           console.error("Error fetching branch details:", error);
//           alert("Concessionária não encontrada.");
//           navigate("/branches");
//         });
//     } else {
//       console.error("CNPJ is undefined. Redirecting...");
//       navigate("/branches");
//     }
//   }, [cnpj]);
  

//   const validateForm = () => {
//     let valid = true;
//     const errorsCopy = { name: "" };

//     if (!name.trim()) {
//       errorsCopy.name = "O nome é obrigatório.";
//       valid = false;
//     }

//     setErrors(errorsCopy);
//     return valid;
//   };

//   /*const updateBranchDetails = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const updatedBranch = { name }; // Only the name is editable

//       updateBranch(cnpj!, updatedBranch)
//         .then((response) => {
//           console.log("Concessionária atualizada com sucesso:", response);
//           navigate("/branches"); // Navigate back to the list page
//         })
//         .catch((error) => {
//           console.error("Erro ao atualizar a concessionária:", error);
//         });
//     }
//   };*/
//   const updateBranchDetails = (e: React.FormEvent) => {
//     e.preventDefault();
  
//     if (validateForm()) {
//       const updatedBranch = { name }; // Only the name is editable
  
//       console.log("Updating branch:", { cnpj, updatedBranch }); // Debug log
  
//       updateBranch(cnpj!, updatedBranch) // Pass cnpj separately and updated data as the payload
//         .then((response) => {
//           console.log("Branch updated successfully:", response);
//           navigate("/branches"); // Navigate back to the list page
//         })
//         .catch((error) => {
//           console.error("Error updating branch:", error);
//           alert("Erro ao atualizar a concessionária.");
//         });
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Editar Concessionária</h2>
//       <form onSubmit={updateBranchDetails}>
//         <div className="form-group mb-3">
//           <label htmlFor="cnpj">CNPJ:</label>
//           <input
//             type="text"
//             id="cnpj"
//             value={cnpj}
//             disabled // CNPJ cannot be edited
//             className="form-control"
//           />
//         </div>

//         <div className="form-group mb-3">
//           <label htmlFor="name">Nome:</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Nome da Concessionária"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className={`form-control ${errors.name ? "is-invalid" : ""}`}
//           />
//           {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Atualizar
//         </button>
//         <button
//           type="button"
//           className="btn btn-secondary ml-2"
//           onClick={() => navigate("/branches")}
//         >
//           Cancelar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBranchPage;