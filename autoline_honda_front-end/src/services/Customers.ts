import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/customers";

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
  phones: { phoneNumber: string }[];
}

export const createCustomer = (customer: Customer) =>
  axios
    .post(`${REST_API_BASE_URL}/add`, customer)
    .catch((error) =>
      console.error(
        "Error creating goal:",
        error.response?.data || error.message
      )
    );

export const getCustomers = () =>
  axios
    .get(REST_API_BASE_URL)
    .catch((error) =>
      console.error(
        "Error fetching goals:",
        error.response?.data || error.message
      )
    );

    export const getCustomer = (cpf: string) => 
      axios.get(`${REST_API_BASE_URL}/${cpf}`)
        .catch((error) => console.error("Error fetching car:", error.response?.data || error.message));
    
    
    export const deleteCar = (cpf: string) => 
      axios.delete(`${REST_API_BASE_URL}/${cpf}`)
        .catch((error) => console.error("Error deleting car:", error.response?.data || error.message));

    export const updateCustomer = (cpf: string, updatedData: Partial<Customer>) => 
      axios.put(`${REST_API_BASE_URL}/${cpf}/edit`, updatedData)
        .catch((error) => console.error("Error updating car with specification:", error.response?.data || error.message));
        
    