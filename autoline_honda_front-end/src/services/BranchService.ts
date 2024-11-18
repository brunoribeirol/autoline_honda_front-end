import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/branches";

// Listar concessionárias
export const listBranches = () =>
  axios.get(REST_API_BASE_URL).catch((error) => console.error(error));

// Criar uma nova concessionária
export const createBranch = (branch: { cnpj: string; name: string }) =>
  axios.post(REST_API_BASE_URL, branch).catch((error) => console.error(error));
