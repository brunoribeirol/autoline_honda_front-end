import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/employees";
const REST_API_BASE_URL = (cnpj: string) =>
  `http://localhost:8080/employees/${cnpj}`;

export interface Employee {
  cpf: string;
  name: string;
  salary: number;
  position: string;
  cnpj: string;
  supervisorCpf: string;
}

export const createEmployee = (employee: Employee) =>
  axios
    .post(`${REST_API_BASE_URL(employee.cnpj)}/add`, employee)
    .catch((error) =>
      console.error(
        "Error creating employee:",
        error.response?.data || error.message
      )
    );

export const getEmployees = (cnpj: string) =>
  axios
    .get(REST_API_BASE_URL(cnpj))
    .catch((error) =>
      console.error(
        "Error fetching employees:",
        error.response?.data || error.message
      )
    );

export const getEmployee = (cpf: string) =>
  axios
    .get(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
        "Error fetching employee:",
        error.response?.data || error.message
      )
    );

export const updateEmployee = (
  goalId: number,
  updatedData: { goalDate: string; carQuantity: number }
) =>
  axios
    .put(`${REST_API_BASE_URL}/${goalId}`, updatedData)
    .catch((error) =>
      console.error(
        "Error updating eemploye:",
        error.response?.data || error.message
      )
    );

export const deleteEmployee = (cpf: string) =>
  axios
    .delete(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
        "Error deleting goal:",
        error.response?.data || error.message
      )
    );
