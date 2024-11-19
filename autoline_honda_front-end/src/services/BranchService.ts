import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/branches";

export const createBranch = (branch: { cnpj: string; name: string }) =>
  axios.post(REST_API_BASE_URL, branch).catch((error) => console.error(error));

export const getBranches = () =>
  axios.get(REST_API_BASE_URL).catch((error) => console.error(error));

export const getBranch = (branch: { cnpj: string }) =>
  axios
    .get(`${REST_API_BASE_URL}/${branch.cnpj}`)
    .catch((error) => console.error(error));

export const updateBranch = (branch: { cnpj: string; name: string }) =>
  axios
    .put(`${REST_API_BASE_URL}/${branch.cnpj}`, branch)
    .catch((error) => console.error(error));

export const deleteBranch = (cnpj: string) =>
  axios
    .delete(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) => console.error(error));

// .catch((error) => console.error("Delete Branch Error:", error.response?.data || error.message));    