import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/branches";

export interface Branch {
  cnpj: string;
  name: string;
  zipCode: string;
  street: string;
  addressNumber: number;
  neighborhood: string;
  city: string;
  state: string;
}

export const createBranch = (branch: Branch) => 
  axios.post(`${REST_API_BASE_URL}/create-with-address`, branch)
    .catch((error) => console.error("Error creating branch:", error.response?.data || error.message));

export const getBranches = () =>
  axios.get(REST_API_BASE_URL)
    .catch((error) => console.error("Error fetching branches:", error.response?.data || error.message));

export const getBranch = (cnpj: string) =>
  axios.get(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) => console.error("Error fetching branch:", error.response?.data || error.message));

export const updateBranch = (cnpj: string, updatedData: Branch) =>
  axios.put(`${REST_API_BASE_URL}/${cnpj}`, updatedData)
    .catch((error) => console.error("Error updating branch:", error.response?.data || error.message));

export const deleteBranch = (cnpj: string) => 
  axios.delete(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) => console.error("Error deleting branch:", error.response?.data || error.message));
