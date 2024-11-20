import axios from "axios";

//const REST_API_BASE_URL = "http://localhost:8080/customers/:cnpj";
const REST_API_BASE_URL = (cnpj: string) =>
  `http://localhost:8080/customers/${cnpj}`;

export interface Customer {
  cpf: string;
  name: string;
  driverLicense: string;
  birthDate: Date;
  neighborhood: string;
  addressNumber: number;
  state: string;
  zipCode: string;
  street: string;
  city: string;
  phoneNumber: string
}

export const createCustomer = (customer: Customer) =>
  axios
    .post(`${REST_API_BASE_URL(customer.cpf)}/add`, customer)
    .catch((error) =>
      console.error(
        "Error creating goal:",
        error.response?.data || error.message
      )
    );

export const getCustomers = (cpf: string) =>
  axios
    .get(REST_API_BASE_URL(cpf))
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

// export const updateGoal = (
//   goalId: number,
//   updatedData: { goalDate: Date; carQuantity: number }
// ) =>
//   axios
//     .put(`${REST_API_BASE_URL}/${goalId}`, updatedData)
//     .catch((error) =>
//       console.error(
//         "Error updating goal:",
//         error.response?.data || error.message
//       )
//     );

// export const deleteGoal = (goalId: number) =>
//   axios
//     .delete(`${REST_API_BASE_URL}/${goalId}`)
//     .catch((error) =>
//       console.error(
//         "Error deleting goal:",
//         error.response?.data || error.message
//       )
//     );
