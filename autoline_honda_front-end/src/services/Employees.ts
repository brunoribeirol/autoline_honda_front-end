import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/employees";

type Employee = {
    cpf: string;
    name: string;
    salary: number;
    position: string;
    branchCnpj: string; 
    // supervisorCpf: string;
  };

export const createEmployee = (employee: Employee) =>
  axios
    .post(REST_API_BASE_URL, employee)
    .catch((error) =>
      console.error(
        "Error creating goal:",
        error.response?.data || error.message
      )
    );

export const getEmployees = () =>
  axios
    .get(REST_API_BASE_URL)
    .catch((error) =>
      console.error(
        "Error fetching goals:",
        error.response?.data || error.message
      )
    );

export const getEmployee = (cpf: string) =>
  axios
    .get(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
        "Error fetching goal:",
        error.response?.data || error.message
      )
    );

// export const updateEmployee = (
//   goalId: number,
//   updatedData: { goalDate: string; carQuantity: number }
// ) =>
//   axios
//     .put(`${REST_API_BASE_URL}/${goalId}`, updatedData)
//     .catch((error) =>
//       console.error(
//         "Error updating goal:",
//         error.response?.data || error.message
//       )
//     );

export const deleteEmployee = (cpf: string) =>
  axios
    .delete(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
        "Error deleting goal:",
        error.response?.data || error.message
      )
    );
