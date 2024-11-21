import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080";

export interface Dashboard {
    salesByEmployee: SalesByEmployee[]
    monthlySales: MonthlySale[]
    clientsWithTradeInCredit: ClientsWithTradeInCredit[]
    averageSalaries: AverageSalary[]
    unsoldCars: any
    salesByFuelType: SalesByFuelType[]
    highestSaleCustomer: any
    salesByBranch: SalesByBranch[]
    discountedSales: any
    employeeSummary: EmployeeSummary
    branchGoals: BranchGoal[]
    mostSoldCar: any
    salesInDateRange: SalesInDateRange[]
  }
  
  // clientsWithTradeInCredit: ClientsWithTradeInCredit[]
  // employeeSummary: EmployeeSummary
  // branchGoals: BranchGoal[]
  // mostSoldCar: any
  // salesInDateRange: SalesInDateRange[]

  export interface SalesByEmployee {
    employeeName: string
    totalSales: number
  }
  
  export interface MonthlySale {
    saleMonth: string
    totalSales: number
    totalRevenue: number
  }
  
  export interface ClientsWithTradeInCredit {
    cpf: string
    name: string
    tradeInValue: number
  }
  
  export interface AverageSalary {
    position: string
    averageSalary: number
  }
  
  export interface SalesByFuelType {
    fuelType: string
    totalSales: number
  }
  
  export interface SalesByBranch {
    branchName: string
    totalSales: number
  }
  
  export interface EmployeeSummary {
    totalManagers: number
    totalSellers: number
  }
  
  export interface BranchGoal {
    branchName: string
    goalDate: string
    carQuantity: number
  }
  
  export interface SalesInDateRange {
    saleId: string
    saleDate: string
    finalPrice: number
    customerName: string
  }  


export const getDashboard = (startDate: string, endDate : string) =>
  axios.get(`${REST_API_BASE_URL}/dashboard?startDate=${startDate}&endDate=${endDate}`)
    .catch((error) => console.error("Error fetching branches:", error.response?.data || error.message));

