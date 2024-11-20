// import axios from "axios";

// const REST_API_BASE_URL = "http://localhost:8080/branches";

// export const createBranch = (branch: { cnpj: string; name: string, zipCode: string, street: string, 
//   addressNumber: number, neighborhood: string, city: string , state: string }) =>
//   axios.post(`${REST_API_BASE_URL}/${create-with-address}`, branch).catch((error) => console.error(error));


// // Antes
// // export const createBranch = (branch: { cnpj: string; name: string}) =>
// //   axios.post(REST_API_BASE_URL, branch).catch((error) => console.error(error));

// export const getBranches = () =>
//   axios.get(REST_API_BASE_URL).catch((error) => console.error(error));

// export const getBranch = (cnpj: string) =>
//   axios
//     .get(`${REST_API_BASE_URL}/${cnpj}`) // Correctly use cnpj directly in the URL
//     .catch((error) => console.error(error));


// // export const updateBranch = (branch: { cnpj: string; name: string }) =>
// //   axios
// //     .put(`${REST_API_BASE_URL}/${branch.cnpj}`, branch)
// //     .catch((error) => console.error(error));

//     export const updateBranch = (cnpj: string, updatedData: { name: string }) => {
//       console.log("Sending PUT request to:", `${REST_API_BASE_URL}/${cnpj}`);
//       console.log("Payload:", updatedData);
//       return axios
//         .put(`${REST_API_BASE_URL}/${cnpj}`, updatedData) // Correctly send cnpj in the URL and updated data in the body
//         .catch((error) => console.error("Error updating branch:", error));
//     };
    

// export const deleteBranch = (cnpj: string) =>
//   axios
//     .delete(`${REST_API_BASE_URL}/${cnpj}`)
//     .catch((error) => console.error(error));

// // .catch((error) => console.error("Delete Branch Error:", error.response?.data || error.message));    


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

export const updateBranch = (cnpj: string, updatedData: { name: string }) => 
  axios.put(`${REST_API_BASE_URL}/${cnpj}`, updatedData)
    .catch((error) => console.error("Error updating branch:", error.response?.data || error.message));

export const deleteBranch = (cnpj: string) => 
  axios.delete(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) => console.error("Error deleting branch:", error.response?.data || error.message));
