import React, { useState } from "react";
import { createCar } from "../../services/Car";
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

  const [errors, setErrors] = useState({
    chassis: "",
    price: "",
    color: "",
    wheelSize: "",
    fuelType: "",
    year: "",
    engine: "",
    transmission: "",
    mileage: "",
    category: "",
    model: "",
    version: "",
  });

  const navigate = useNavigate();

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
    category, // Moved directly into the car object
    model, // Moved directly into the car object
    version, // Moved directly into the car object
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = {
      chassis: "",
      price: "",
      color: "",
      wheelSize: "",
      fuelType: "",
      year: "",
      engine: "",
      transmission: "",
      mileage: "",
      category: "",
      model: "",
      version: "",
    };

    if (!chassis.trim()) {
      errorsCopy.chassis = "O campo 'Chassi' é obrigatório.";
      valid = false;
    }

    if (!price.trim()) {
      errorsCopy.price = "O campo 'Preço' é obrigatório.";
      valid = false;
    }

    if (!color.trim()) {
      errorsCopy.color = "O campo 'Cor' é obrigatório.";
      valid = false;
    }

    if (!wheelSize.trim()) {
      errorsCopy.wheelSize = "O campo 'Número da Roda' é obrigatório.";
      valid = false;
    }

    if (!fuelType.trim()) {
      errorsCopy.fuelType = "O campo 'Combustível' é obrigatório.";
      valid = false;
    }

    if (!year.trim()) {
      errorsCopy.year = "O campo 'Ano' é obrigatório.";
      valid = false;
    }

    if (!engine.trim()) {
      errorsCopy.engine = "O campo 'Motor' é obrigatório.";
      valid = false;
    }

    if (!transmission.trim()) {
      errorsCopy.transmission = "O campo 'Câmbio' é obrigatório.";
      valid = false;
    }

    if (!mileage.trim()) {
      errorsCopy.mileage = "O campo 'Kilometragem' é obrigatório.";
      valid = false;
    }

    if (!category.trim()) {
      errorsCopy.category = "O campo 'Categoria' é obrigatório.";
      valid = false;
    }

    if (!model.trim()) {
      errorsCopy.model = "O campo 'Modelo' é obrigatório.";
      valid = false;
    }

    if (!version.trim()) {
      errorsCopy.version = "O campo 'Versão' é obrigatório.";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveCar = (e: React.FormEvent) => {
    e.preventDefault();

    if(validateForm()) {
      const car = {
          chassis: "",
          price: "",
          color: "",
          wheelSize: "",
          fuelType: "",
          year: "",
          engine: "",
          transmission: "",
          mileage: "",
          category: "",
          model: "",
          version: "",
        };
    }

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
            placeholder="Chassi"
            value={chassis}
            onChange={(e) => setChassis(e.target.value)}
            className={`form-control ${errors.chassis ? "is-invalid" : ""}`}
          />
          {errors.chassis && (
            <div className="invalid-feedback">{errors.chassis}</div>
          )}
        </div>
        {/* Price */}
        <div className="form-group mb-3">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            placeholder="Preço"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
        </div>
        {/* Color */}
        <div className="form-group mb-3">
          <label htmlFor="color">Cor:</label>
          <input
            type="text"
            id="color"
            placeholder="Cor"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`form-control ${errors.color ? "is-invalid" : ""}`}
            />
            {errors.color && (
              <div className="invalid-feedback">{errors.color}</div>
            )}
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
            className={`form-control ${errors.wheelSize ? "is-invalid" : ""}`}
            />
            {errors.wheelSize && (
              <div className="invalid-feedback">{errors.wheelSize}</div>
            )}
        </div>
        {/* Fuel Type */}
        <div className="form-group mb-3">
          <label htmlFor="fuelType">Tipo de Combustível:</label>
          <select
            id="fuelType"
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
            className={`form-control ${errors.fuelType ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um tipo</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Eletric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
          {errors.fuelType && (
            <div className="invalid-feedback">{errors.fuelType}</div>
          )}
        </div>
        {/* Year */}
        <div className="form-group mb-3">
          <label htmlFor="year">Ano:</label>
          <input
            type="number"
            id="year"
            placeholder="Ano"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`form-control ${errors.year ? "is-invalid" : ""}`}
            />
            {errors.year && (
              <div className="invalid-feedback">{errors.year}</div>
            )}
        </div>
        {/* Engine */}
        <div className="form-group mb-3">
          <label htmlFor="engine">Motor:</label>
          <input
            type="text"
            id="engine"
            placeholder="Motor"
            value={engine}
            onChange={(e) => setEngine(e.target.value)}
            className={`form-control ${errors.engine ? "is-invalid" : ""}`}
            />
            {errors.engine && (
              <div className="invalid-feedback">{errors.engine}</div>
            )}
        </div>
        {/* Transmission */}
        <div className="form-group mb-3">
          <label htmlFor="transmission">Câmbio:</label>
          <select
            id="transimission"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className={`form-control ${errors.transmission ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um Câmbio</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
            <option value="CVT">CVT</option>
          </select>
          {errors.transmission && (
            <div className="invalid-feedback">{errors.transmission}</div>
          )}
        </div>
        {/* Mileage */}
        <div className="form-group mb-3">
          <label htmlFor="mileage">Quilometragem:</label>
          <input
            type="number"
            id="mileage"
            placeholder="Quilometragem"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className={`form-control ${errors.mileage ? "is-invalid" : ""}`}
            />
            {errors.mileage && (
              <div className="invalid-feedback">{errors.mileage}</div>
            )}
        </div>

        {/* Specification: Category */}
        <div className="form-group mb-3">
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`form-control ${errors.category ? "is-invalid" : ""}`}
          >
            <option value="">Selecione uma Categoria</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatch">Hatch</option>
            <option value="Esportivo">Esportivo</option>
          </select>
            {errors.category && (
              <div className="invalid-feedback">{errors.category}</div>
            )}
        </div>
        {/* Specification: Model */}
        <div className="form-group mb-3">
          <label htmlFor="model">Modelo:</label>
          <select
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className={`form-control ${errors.model ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um Modelo</option>
            <option value="HR-V">HR-V</option>
            <option value="City Hatchback">City Hatchback</option>
            <option value="City">City</option>
            <option value="Civic Advanced Hybrid">Civic Advanced Hybrid</option>
            <option value="Civic Type R">Civic Type R</option>
            <option value="Accord Advanced Hybrid">Accord Advanced Hybrid</option>
            <option value="ZR-V">ZR-V</option>
            <option value="CR-V Advanced Hybrid">CR-V Advanced Hybrid</option>
          </select>
            {errors.model && (
              <div className="invalid-feedback">{errors.model}</div>
            )}
        </div>
        {/* Specification: Version */}
        <div className="form-group mb-3">
          <label htmlFor="version">Versão:</label>
          <select
            id="version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            className={`form-control ${errors.version ? "is-invalid" : ""}`}
          >
            <option value="">Selecione uma Versão</option>
            <option value="Híbrido">Híbrido</option>
            <option value="Touring">Touring</option>
            <option value="City">City</option>
            <option value="EXL">EXL</option>
            <option value="EX">EX</option>
            <option value="LX">LX</option>
            <option value="Advance">Advance</option>
            <option value="EXL Honda">EXL Honda</option>
            <option value="EX Honda">EX Honda</option>
          </select>
            {errors.version && (
              <div className="invalid-feedback">{errors.version}</div>
            )}
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
