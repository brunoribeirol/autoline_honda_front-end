import React, { useState } from "react";
import { createCustomer } from "../../services/Customers";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const AddCustomer: React.FC = () => {
  // Campos de cliente
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [driverLicense, setDriverLicense] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  // Telefones
  const [phones, setPhones] = useState<string[]>([""]);

  const [errors, setErrors] = useState({
    cpf: "",
    name: "",
    driverLicense: "",
    birthDate: "",
    neighborhood: "",
    addressNumber: "",
    state: "",
    zipCode: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    Object.entries({ cpf, name, driverLicense, birthDate, neighborhood, addressNumber, state, zipCode, street, city })
      .forEach(([key, value]) => {
        if (!value.trim()) {
          errorsCopy[key as keyof typeof errors] = `O campo '${key}' é obrigatório.`;
          valid = false;
        } else {
          errorsCopy[key as keyof typeof errors] = "";
        }
      });

    setErrors(errorsCopy);
    return valid;
  };

  const saveCustomer = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const customer = {
        cpf,
        name,
        driverLicense,
        birthDate: new Date(birthDate),
        neighborhood,
        addressNumber: parseInt(addressNumber, 10),
        state,
        zipCode,
        street,
        city,
        phones: phones.map((phone) => ({ phoneNumber: phone })), // Telefones formatados
      };

      console.log("Payload enviado:", customer); // Verifique o formato dos dados aqui

      createCustomer(customer)
        .then((response) => {
          if (response?.data) {
            console.log("Customer created successfully:", response.data);
            navigate("/customers");
          }
        })
        .catch((error) => {
          console.error("Error creating customer:", error.response?.data || error.message);
        });
    }
  };

  const handlePhoneChange = (index: number, value: string) => {
    const newPhones = [...phones];
    newPhones[index] = value;
    setPhones(newPhones);
  };

  const addPhoneField = () => {
    setPhones([...phones, ""]);
  };

  const removePhoneField = (index: number) => {
    setPhones(phones.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2 className="text-center">Adicionar Cliente</h2>
      <form onSubmit={saveCustomer}>
        {/* CPF */}
        <div className="form-group mb-3">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className={`form-control ${errors.cpf ? "is-invalid" : ""}`}
          />
          {errors.cpf && <div className="invalid-feedback">{errors.cpf}</div>}
        </div>

        {/* Nome */}
        <div className="form-group mb-3">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Driver License */}
        <div className="form-group mb-3">
          <label htmlFor="driverLicense">Carteira de Motorista:</label>
          <input
            type="text"
            id="driverLicense"
            placeholder="CNH"
            value={driverLicense}
            onChange={(e) => setDriverLicense(e.target.value)}
            className={`form-control ${errors.driverLicense ? "is-invalid" : ""}`}
          />
          {errors.driverLicense && <div className="invalid-feedback">{errors.driverLicense}</div>}
        </div>
        {/* Birth Date */}
        <div className="form-group mb-3">
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input
            type="date"
            id="birthDate"
            placeholder=""
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
          />
          {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
        </div>
        {/* Telefones */}
        <div className="form-group mb-3">
          <label htmlFor="phones">Telefones:</label>
          {phones.map((phone, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={phone}
                onChange={(e) => handlePhoneChange(index, e.target.value)}
                className="form-control d-inline"
                style={{ width: "80%" }}
              />
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => removePhoneField(index)}
              >
                Remover
              </button>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-primary mt-2"
            onClick={addPhoneField}
          >
            Adicionar Telefone
          </button>
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

        <Stack direction="row" spacing={2}>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => navigate("/customers")}
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
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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

export default AddCustomer;
