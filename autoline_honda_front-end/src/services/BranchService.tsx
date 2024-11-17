import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/branches";

export const listBranches = () => axios.get(REST_API_BASE_URL);
