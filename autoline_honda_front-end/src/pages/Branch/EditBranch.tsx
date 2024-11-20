import React, { useState, useEffect } from "react";
import { getBranch, updateBranch } from "../../services/Branch";
import { useNavigate, useParams } from "react-router-dom";

const EditBranch: React.FC = () => {
  const { cnpj } = useParams<{ cnpj: string }>(); // Get CNPJ from route params
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

  const navigate = useNavigate();

  useEffect(() => {
    console.log("CNPJ from route params:", cnpj); // Debug log

    if (cnpj) {
      getBranch(cnpj) // Pass the cnpj directly
        .then((response) => {
          console.log("Fetched branch details:", response.data); // Debug log
          if (response.data) {
            setName(response.data.name); // Set the branch's name
          } else {
            throw new Error("Branch not found");
          }
        })
        .catch((error) => {
          console.error("Error fetching branch details:", error);
          alert("Concessionária não encontrada.");
          navigate("/branches");
        });
    } else {
      console.error("CNPJ is undefined. Redirecting...");
      navigate("/branches");
    }
  }, [cnpj]);

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { name: "" };

    if (!name.trim()) {
      errorsCopy.name = "O nome é obrigatório.";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  const updateBranchDetails = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const updatedBranch = {
        name,
        zipCode,
        street,
        addressNumber,
        neighborhood,
        city,
        state,
      };

      updateBranch(cnpj!, updatedBranch) // Pass cnpj separately
        .then((response) => {
          console.log("Branch updated successfully:", response);
          navigate("/branches");
        })
        .catch((error) => {
          console.error("Error updating branch:", error);
          alert("Erro ao atualizar a concessionária.");
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Editar Concessionária</h2>
      <form onSubmit={updateBranchDetails}>
        {/* CNPJ */}
        <div className="form-group mb-3">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text"
            id="cnpj"
            value={cnpj || ""}
            disabled
            className="form-control"
          />
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
            value={zipCode || ""}
            onChange={(e) => setZipCode(e.target.value)}
            className={`form-control ${errors.zipCode ? "is-invalid" : ""}`}
          />
          {errors.zipCode && (
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
          {errors.street && (
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
          {errors.addressNumber && (
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
          {errors.neighborhood && (
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
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>
        {/* State */}
        <div className="form-group mb-3">
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className={`form-control ${errors.state ? "is-invalid" : ""}`}
          >
            <option value="">Selecione um estado</option>
            <option value="AC">Acre (AC)</option>
            <option value="AL">Alagoas (AL)</option>
            <option value="AP">Amapá (AP)</option>
            <option value="AM">Amazonas (AM)</option>
            <option value="BA">Bahia (BA)</option>
            <option value="CE">Ceará (CE)</option>
            <option value="DF">Distrito Federal (DF)</option>
            <option value="ES">Espírito Santo (ES)</option>
            <option value="GO">Goiás (GO)</option>
            <option value="MA">Maranhão (MA)</option>
            <option value="MT">Mato Grosso (MT)</option>
            <option value="MS">Mato Grosso do Sul (MS)</option>
            <option value="MG">Minas Gerais (MG)</option>
            <option value="PA">Pará (PA)</option>
            <option value="PB">Paraíba (PB)</option>
            <option value="PR">Paraná (PR)</option>
            <option value="PE">Pernambuco (PE)</option>
            <option value="PI">Piauí (PI)</option>
            <option value="RJ">Rio de Janeiro (RJ)</option>
            <option value="RN">Rio Grande do Norte (RN)</option>
            <option value="RS">Rio Grande do Sul (RS)</option>
            <option value="RO">Rondônia (RO)</option>
            <option value="RR">Roraima (RR)</option>
            <option value="SC">Santa Catarina (SC)</option>
            <option value="SP">São Paulo (SP)</option>
            <option value="SE">Sergipe (SE)</option>
            <option value="TO">Tocantins (TO)</option>
          </select>
          {errors.state && (
            <div className="invalid-feedback">{errors.state}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Atualizar
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={() => navigate("/branches")}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditBranch;
