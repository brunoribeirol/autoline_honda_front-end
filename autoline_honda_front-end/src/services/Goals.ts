import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/goals";

export interface Goal {
  goalDate: Date;
  carQuantity: number;
}

// export interface Goal {
//   goalDate: string; // ISO format: yyyy-mm-dd
//   carQuantity: number;
// }

export const createGoal = (goal: Goal) =>
  axios
    .post(REST_API_BASE_URL, goal)
    .catch((error) =>
      console.error(
        "Error creating goal:",
        error.response?.data || error.message
      )
    );

export const getGoals = () =>
  axios
    .get(REST_API_BASE_URL)
    .catch((error) =>
      console.error(
        "Error fetching goals:",
        error.response?.data || error.message
      )
    );

export const getGoal = (goalId: number) =>
  axios
    .get(`${REST_API_BASE_URL}/${goalId}`)
    .catch((error) =>
      console.error(
        "Error fetching goal:",
        error.response?.data || error.message
      )
    );

export const updateGoal = (
  goalId: number,
  updatedData: { goalDate: string; carQuantity: number }
) =>
  axios
    .put(`${REST_API_BASE_URL}/${goalId}`, updatedData)
    .catch((error) =>
      console.error(
        "Error updating goal:",
        error.response?.data || error.message
      )
    );

export const deleteGoal = (branchCnpj: string) =>
  axios
    .delete(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) =>
      console.error(
        "Error deleting goal:",
        error.response?.data || error.message
      )
    );
