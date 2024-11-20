import axios from "axios";

//const REST_API_BASE_URL = "http://localhost:8080/goals/:cnpj";
const REST_API_BASE_URL = (cnpj: string) =>
  `http://localhost:8080/goals/${cnpj}`;

export interface Goal {
  cnpj: string;
  goalDate: Date;
  carQuantity: number;
}

export const createGoal = (goal: Goal) =>
  axios
    .post(`${REST_API_BASE_URL(goal.cnpj)}/add`, goal)
    .catch((error) =>
      console.error(
        "Error creating goal:",
        error.response?.data || error.message
      )
    );

export const getGoals = (cnpj: string) =>
  axios
    .get(REST_API_BASE_URL(cnpj))
    .catch((error) =>
      console.error(
        "Error fetching goals:",
        error.response?.data || error.message
      )
    );

// export const getGoal = (goalId: number) =>
//   axios
//     .get(`${REST_API_BASE_URL}/${goalId}`)
//     .catch((error) =>
//       console.error(
//         "Error fetching goal:",
//         error.response?.data || error.message
//       )
//     );

export const updateGoal = (
  goalId: number,
  updatedData: { goalDate: Date; carQuantity: number }
) =>
  axios
    .put(`${REST_API_BASE_URL}/${goalId}`, updatedData)
    .catch((error) =>
      console.error(
        "Error updating goal:",
        error.response?.data || error.message
      )
    );

export const deleteGoal = (goalId: number) =>
  axios
    .delete(`${REST_API_BASE_URL}/${goalId}`)
    .catch((error) =>
      console.error(
        "Error deleting goal:",
        error.response?.data || error.message
      )
    );
