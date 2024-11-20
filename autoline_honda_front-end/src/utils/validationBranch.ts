export const validateCNPJ = (cnpj: string) => {
  if (!cnpj) {
    return "O campo 'CNPJ' é obrigatório.";
  }
  const regex = /^\d{14}$/;
  if (!regex.test(cnpj)) {
    return "Por favor, insira um CNPJ válido (14 números).";
  }
  return null;
};

export const validateZipCode = (zipCode: string) => {
  if (!zipCode) {
    return "O campo 'CEP' é obrigatório";
  }
  const regex = /^\d{8}$/;
  if (!regex.test(zipCode)) {
    return "Por favor, insira um CEP válido (8 números).";
  }
  return null;
};

export const validateForm = (
  cnpj: string,
  name: string,
  zipCode: string,
  street: string,
  addressNumber: string,
  neighborhood: string,
  city: string,
  state: string
) => {
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

  if (!state.trim()) {
    errorsCopy.state = "O campo 'Estado' é obrigatório.";
    valid = false;
  }

  return { valid, errors: errorsCopy };
};
