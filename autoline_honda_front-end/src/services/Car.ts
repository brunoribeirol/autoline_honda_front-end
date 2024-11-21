import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/cars";

export interface Car {
  chassis: string;
  price: number;
  color: string;
  wheelSize: number;
  fuelType: string;
  year: number;
  engine: string;
  transmission: string;
  mileage: number;
  carCondition: string;
  category: string;
  model: string;
  version: string;
  carChassis: string;
}

export const createCar = (carData: Car) => 
  axios.post(`${REST_API_BASE_URL}/create-with-specification`, carData)
    .catch((error) => console.error("Error creating car with specification:", error.response?.data || error.message));

export const getCars = () => 
  axios.get(REST_API_BASE_URL)
    .catch((error) => console.error("Error fetching cars:", error.response?.data || error.message));

export const getCar = (chassis: string) => 
  axios.get(`${REST_API_BASE_URL}/${chassis}`)
    .catch((error) => console.error("Error fetching car:", error.response?.data || error.message));

export const updateCarWithSpecification = (chassis: string, carData: Car) => 
  axios.put(`${REST_API_BASE_URL}/${chassis}`, carData)
    .catch((error) => console.error("Error updating car with specification:", error.response?.data || error.message));

export const deleteCar = (chassis: string) => 
  axios.delete(`${REST_API_BASE_URL}/${chassis}`)
    .catch((error) => console.error("Error deleting car:", error.response?.data || error.message));
