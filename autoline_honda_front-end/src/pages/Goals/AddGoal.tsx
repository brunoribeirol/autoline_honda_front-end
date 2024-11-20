import React, { useState } from "react";
import { createGoal } from "../../services/Goals";
import { useNavigate } from "react-router-dom";
// import {
//   validateCNPJ,
//   validateZipCode,
//   validateForm,

// } from "../../utils/validationBranch";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const AddGoal = () => {
  const [goalDate, setGoalDate] = useState("");
  const [carQuantity, setCarQuantity] = useState("");

  const [errors, setErrors] = useState({
    goalDate: "",
    carQuantity: "",
  });

  const navigate = useNavigate();

  // Função para validar a data da meta
  const validateGoalDate = (date: string) => {
    if (!date.trim()) {
      return "O campo 'Data' é obrigatório.";
    }

    // Validar formato de data yyyy-mm-dd
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(date)) {
      return "Por favor, insira uma data válida (yyyy-mm-dd).";
    }
    return null;
  };

  // Função para validar o formulário
  const validateForm = () => {
    let isValid = true;
    const errorsCopy = {
      goalDate: "",
      carQuantity: "",
    };

    const goalDateError = validateGoalDate(goalDate);
    if (goalDateError) {
      errorsCopy.goalDate = goalDateError;
      isValid = false;
    }

    if (!carQuantity.trim()) {
      errorsCopy.carQuantity = "O campo 'Quantidade de Carros' é obrigatório.";
      isValid = false;
    } else if (Number(carQuantity) <= 0) {
      errorsCopy.carQuantity =
        "Por favor, insira uma quantidade de carros válida (maior que 0).";
      isValid = false;
    }

    setErrors(errorsCopy);
    return isValid;
  };

  // Função para salvar a meta
  const saveGoal = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const goal = {
        goalDate,
        carQuantity: Number(carQuantity),
      };

      console.log("Goal data:", goal);

      // Substituir pelo serviço real de criação de metas
      createGoal(goal)
        .then((response) => {
          if (response?.data) {
            console.log("Meta criada com sucesso:", response.data);
            navigate("/goals");
          }
        })
        .catch((error) => {
          console.error(
            "Erro ao criar a meta:",
            error.response?.data || error.message
          );
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Adicionar Meta Concessionária</h2>
      <form onSubmit={saveGoal}>
        {/* Goal ID? */}
        {/* Goal Date */}
        <div className="form-group mb-3">
          <label htmlFor="goalDate">Meta:</label>
          <input
            type="date"
            id="goalDate"
            placeholder="?"
            value={goalDate}
            onChange={(e) => setGoalDate(e.target.value)}
            className={`form-control ${errors.goalDate ? "is-invalid" : ""}`}
          />
          {errors.goalDate && (
            <div className="invalid-feedback">{errors.goalDate}</div>
          )}
        </div>
        {/* Car Quantity */}
        <div className="form-group mb-3">
          <label htmlFor="carQuantity">Quantidade de Carros:</label>
          <input
            type="number"
            id="carQuantity"
            placeholder="Quantidade de Carros"
            value={carQuantity}
            onChange={(e) => setCarQuantity(e.target.value)}
            className={`form-control ${errors.carQuantity ? "is-invalid" : ""}`}
          />
          {errors.carQuantity && (
            <div className="invalid-feedback">{errors.carQuantity}</div>
          )}
        </div>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              "&:hover": {
                scale: 1.1,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              },
              transition: "0.25s",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddGoal;

// return (
//     <div className="container">
//       <h2 className="text-center">Adicionar Meta Concessionária</h2>
//       <form onSubmit={saveGoal}>
//         {/* Campo de Data */}
//         <div className="form-group mb-3">
//           <label htmlFor="goalDate">Data da Meta:</label>
//           <input
//             type="date"
//             id="goalDate"
//             value={goalDate}
//             onChange={(e) => setGoalDate(e.target.value)}
//             className={`form-control ${errors.goalDate ? "is-invalid" : ""}`}
//           />
//           {errors.goalDate && (
//             <div className="invalid-feedback">{errors.goalDate}</div>
//           )}
//         </div>

//         {/* Campo de Quantidade de Carros */}
//         <div className="form-group mb-3">
//           <label htmlFor="carQuantity">Quantidade de Carros:</label>
//           <input
//             type="number"
//             id="carQuantity"
//             placeholder="Quantidade de Carros"
//             value={carQuantity}
//             onChange={(e) => setCarQuantity(e.target.value)}
//             className={`form-control ${errors.carQuantity ? "is-invalid" : ""}`}
//           />
//           {errors.carQuantity && (
//             <div className="invalid-feedback">{errors.carQuantity}</div>
//           )}
//         </div>

//         {/* Botão de Enviar */}
//         <Stack direction="row" spacing={2}>
//           <Button
//             variant="contained"
//             type="submit"
//             endIcon={<SendIcon />}
//             sx={{
//               "&:hover": {
//                 scale: 1.1,
//                 boxShadow:
//                   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
//               },
//               transition: "0.25s",
//             }}
//           >
//             Enviar
//           </Button>
//         </Stack>
//       </form>
//     </div>
//   );
// };