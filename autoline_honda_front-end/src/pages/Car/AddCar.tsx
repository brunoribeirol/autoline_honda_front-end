import React, { useState } from "react";
import { createCar } from "../../services/Car"; // Presume-se que exista um serviço para criar carros
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const AddCar: React.FC = () => {
  // Car details
  const [chassis, setChassis] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [year, setYear] = useState("");
  const [engine, setEngine] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState("");

  // Specification details
  const [category, setCategory] = useState("");
  const [model, setModel] = useState("");
  const [version, setVersion] = useState("");

  const navigate = useNavigate();

  // const saveCar = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const car = {
  //     chassis,
  //     price: parseFloat(price),
  //     color,
  //     wheelSize: parseInt(wheelSize, 10),
  //     fuelType,
  //     year: parseInt(year, 10),
  //     engine,
  //     transmission,
  //     mileage: parseInt(mileage, 10),
  //     specification: {
  //       category,
  //       model,
  //       version,
  //     },
  //   };

  //   createCar(car)
  //     .then((response) => {
  //       if (response?.data) {
  //         console.log("Car created successfully:", response.data);
  //         navigate("/cars");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Error creating car:",
  //         error.response?.data || error.message
  //       );
  //     });
  // };
  // const saveCar = (e: React.FormEvent) => {
  //   e.preventDefault();
  
  //   const car = {
  //     chassis,
  //     price: parseFloat(price),
  //     color,
  //     wheelSize: parseInt(wheelSize, 10),
  //     fuelType,
  //     year: parseInt(year, 10),
  //     engine,
  //     transmission,
  //     mileage: parseInt(mileage, 10),
  //     carCondition: mileage === 0 ? "New" : "Used", // Derivada
  //     specification: {
  //       category,
  //       model,
  //       version,
  //     },
  //   };
    const saveCar = (e: React.FormEvent) => {
      e.preventDefault();
    
      const car = {
        chassis,
        price: parseFloat(price),
        color,
        wheelSize: parseInt(wheelSize, 10),
        fuelType,
        year: parseInt(year, 10),
        engine,
        transmission,
        mileage: parseInt(mileage, 10),
        carCondition: parseInt(mileage, 10) === 0 ? "New" : "Used", // Derived field
        category, // Moved directly into the car object
        model,    // Moved directly into the car object
        version,  // Moved directly into the car object
      };
    
      createCar(car)
        .then((response) => {
          if (response?.data) {
            console.log("Car created successfully:", response.data);
            navigate("/cars");
          }
        })
        .catch((error) => {
          console.error(
            "Error creating car:",
            error.response?.data || error.message
          );
        });
    };

    // const saveCar = (e: React.FormEvent) => {
    //   e.preventDefault();
    
    //   const parsedMileage = parseInt(mileage, 10);
    
    //   const car = {
    //     chassis,
    //     price: parseFloat(price),
    //     color,
    //     wheelSize: parseInt(wheelSize, 10),
    //     fuelType,
    //     year: parseInt(year, 10),
    //     engine,
    //     transmission,
    //     mileage: parsedMileage,
    //     carCondition: parsedMileage === 0 ? "New" : "Used", // Derived field
    //     category, // Directly included in the car object
    //     model,    // Directly included in the car object
    //     version,  // Directly included in the car object
    //   };
    
    //   createCar(car)
    //     .then((response) => {
    //       if (response?.data) {
    //         console.log("Car created successfully:", response.data);
    //         navigate("/cars");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(
    //         "Error creating car:",
    //         error.response?.data || error.message
    //       );
    //     });
    // };
    
    

    // const car = {
    //   chassis,
    //   price: parseFloat(price),
    //   color,
    //   wheelSize: parseInt(wheelSize, 10),
    //   fuelType,
    //   year: parseInt(year, 10),
    //   engine,
    //   transmission,
    //   mileage: parseInt(mileage, 10),
    //   carCondition: mileage === 0 ? "New" : "Used",
    //   category,
    //   model,
    //   version,
    //   carChassis: chassis, // Presume-se que o `carChassis` seja o mesmo que `chassis`
    // };
    
  //   createCar(car)
  //     .then((response) => {
  //       if (response?.data) {
  //         console.log("Car created successfully:", response.data);
  //         navigate("/cars");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Error creating car:",
  //         error.response?.data || error.message
  //       );
  //     });
  // };
  
  return (
    <div className="container">
      <h2 className="text-center">Adicionar Carro</h2>
      <form onSubmit={saveCar}>
        {/* Chassis */}
        <div className="form-group mb-3">
          <label htmlFor="chassis">Chassi:</label>
          <input
            type="text"
            id="chassis"
            placeholder="Chassi do carro"
            value={chassis}
            onChange={(e) => setChassis(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Price */}
        <div className="form-group mb-3">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            placeholder="Preço do carro"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Color */}
        <div className="form-group mb-3">
          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            id="color"
            placeholder="Cor do carro"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Wheel Size */}
        <div className="form-group mb-3">
          <label htmlFor="wheelSize">Tamanho da roda:</label>
          <input
            type="number"
            id="wheelSize"
            placeholder="Tamanho da roda"
            value={wheelSize}
            onChange={(e) => setWheelSize(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Fuel Type */}
        <div className="form-group mb-3">
          <label htmlFor="fuelType">Tipo de Combustível:</label>
          <select
            id="fuelType"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            // className={`form-control ${errors.fuelType ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um tipo</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Eletric</option>
            <option value="Hybrid">Hybrid</option>
            </select>
          {/* {errors.fuelType && (
            <div className="invalid-feedback">{errors.fuelType}</div>
          )} */}
        </div>
        {/* Year */}
        <div className="form-group mb-3">
          <label htmlFor="year">Ano:</label>
          <input
            type="number"
            id="year"
            placeholder="Ano do carro"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Engine */}
        <div className="form-group mb-3">
          <label htmlFor="engine">Motor:</label>
          <input
            type="text"
            id="engine"
            placeholder="Motor do carro"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Transmission */}
        <div className="form-group mb-3">
          <label htmlFor="transmission">Transmissão:</label>
          <input
            type="text"
            id="transmission"
            placeholder="Manual, Automática, etc."
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Mileage */}
        <div className="form-group mb-3">
          <label htmlFor="mileage">Quilometragem:</label>
          <input
            type="number"
            id="mileage"
            placeholder="Quilometragem do carro"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className="form-control"
          />
        </div>

        {/* Specification: Category */}
        <div className="form-group mb-3">
          <label htmlFor="category">Categoria:</label>
          <input
            type="text"
            id="category"
            placeholder="Categoria do carro"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Specification: Model */}
        <div className="form-group mb-3">
          <label htmlFor="model">Modelo:</label>
          <input
            type="text"
            id="model"
            placeholder="Modelo do carro"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="form-control"
          />
        </div>
        {/* Specification: Version */}
        <div className="form-group mb-3">
          <label htmlFor="version">Versão:</label>
          <input
            type="text"
            id="version"
            placeholder="Versão do carro"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className="form-control"
          />
        </div>

        <Stack direction="row" spacing={2}>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/cars")}
          >
            Voltar
          </button>
          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              "&:hover": {
                scale: 1.1,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              },
              transition: "0.25s",
            }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default AddCar;
