import React, { useState } from "react";
import { createBranch } from "../../services/BranchService";
import { useNavigate } from "react-router-dom";
import { validateCNPJ, validateZipCode, validateState } from "../../utils/validationBranch";

const AddBranchPage: React.FC = () => {
  // Branch
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  // Address
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [errors, setErrors] = useState({
    cnpj: "",
    name: "",
    zipCode: "",
    street: "",
    addressNumber: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  // const navigate = useNavigate();

  const validateCNPJ = (cnpj: string) => {
    if (!cnpj) {
      return "O campo 'CNPJ' é obrigatório.";
    }
    const regex = /^\d{14}$/;
    if (!regex.test(cnpj)) {
      return "Por favor, insira um CNPJ válido (14 números).";
    }
    return null;
  };

  const validateZipCode = (zipCode: string) => {
    if (!zipCode) {
      return "O campo 'CEP' é obrigatório";
    }
    const regex = /^\d{8}$/;
    if (!regex.test(zipCode)) {
      return "Por favor, insira um CEP válido (8 números).";
    }
    return null;
  };

  const validateState = (state: string) => {
    if (!state) {
      return "O campo 'Estado' é obrigatório.";
    }
    const regex = /^[A-Za-z]{2}$/;
    if (!regex.test(state)) {
      return "Por favor, insira um Estado válido (ex: SP).";
    }
    return null;
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = {
      cnpj: "",
      name: "",
      zipCode: "",
      street: "",
      addressNumber: "",
      neighborhood: "",
      city: "",
      state: "",
    };

    const cnpjError = validateCNPJ(cnpj);
    if (cnpjError) {
      errorsCopy.cnpj = cnpjError;
      valid = false;
    }

    if (!name.trim()) {
      errorsCopy.name = "O campo 'Nome' é obrigatório.";
      valid = false;
    }

    const zipCodeError = validateZipCode(zipCode);
    if (zipCodeError) {
      errorsCopy.zipCode = zipCodeError;
      valid = false;
    }

    if (!street.trim()) {
      errorsCopy.street = "O campo 'Rua' é obrigatório.";
      valid = false;
    }

    if (!addressNumber.trim()) {
      errorsCopy.addressNumber = "O campo 'Número' é obrigatório.";
      valid = false;
    }

    if (!neighborhood.trim()) {
      errorsCopy.neighborhood = "O campo 'Bairro' é obrigatório.";
      valid = false;
    }

    if (!city.trim()) {
      errorsCopy.city = "O campo 'Cidade' é obrigatório.";
      valid = false;
    }

    const stateCodeError = validateState(state);
    if (stateCodeError) {
      errorsCopy.state = stateCodeError;
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const saveBranch = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const branch = {
        cnpj,
        name,
        zipCode,
        street,
        addressNumber: parseInt(addressNumber, 10),
        neighborhood,
        city,
        state,
      };
      console.log(branch);

      createBranch(branch)
        .then((response) => {
          if (response?.data) {
            console.log("Branch created successfully:", response.data);
          }
        })
        .catch((error) => {
          console.error(
            "Erro ao criar a concessionária:",
            error.response?.data || error.message
          );
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Adicionar Concessionária</h2>
      <form onSubmit={saveBranch}>
        {/* CNPJ */}
        <div className="form-group mb-3">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            placeholder="00000000000000"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className={`form-control ${errors.cnpj ? "is-invalid" : ""}`}
          />
          {errors.cnpj && <div className="invalid-feedback">{errors.cnpj}</div>}
        </div>
        {/* Name */}
        <div className="form-group mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da Concessionária"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        {/* Zip Code */}
        <div className="form-group mb-3">
          <label htmlFor="zipCode">CEP:</label>
          <input
            type="text"
            id="zipCode"
            placeholder="CEP"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.zipCode}</div>
          )}
        </div>
        {/* Street */}
        <div className="form-group mb-3">
          <label htmlFor="street">Rua:</label>
          <input
            type="text"
            id="street"
            placeholder="Rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className={`form-control ${errors.street ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.street}</div>
          )}
        </div>

        {/* Address Number */}
        <div className="form-group mb-3">
          <label htmlFor="number">Número:</label>
          <input
            type="number"
            id="addressNumber"
            placeholder="Número"
            value={addressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
            className={`form-control ${
              errors.addressNumber ? "is-invalid" : ""
            }`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.addressNumber}</div>
          )}
        </div>
        {/* Neighborhood */}
        <div className="form-group mb-3">
          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className={`form-control ${
              errors.neighborhood ? "is-invalid" : ""
            }`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.neighborhood}</div>
          )}
        </div>
        {/* City */}
        <div className="form-group mb-3">
          <label htmlFor="city">Cidade:</label>
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`form-control ${errors.city ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.city}</div>}
        </div>
        {/* State */}
        <div className="form-group mb-3">
          <label htmlFor="state">Estado:</label>
          <input
            type="text"
            id="state"
            placeholder="Estado"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`form-control ${errors.state ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.state}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddBranchPage;
