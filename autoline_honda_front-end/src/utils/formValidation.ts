const validateCNPJ = (cnpj: string) => {
  if (!cnpj) {
    return "O campo CNPJ é obrigatório.";
  }
  const regex = /^\d{14}$/; // O CNPJ precisa ter 14 dígitos numéricos sem formatação
  if (!regex.test(cnpj)) {
    return "Por favor, insira um CNPJ válido (apenas números).";
  }
  return null;
};

const validateForm = () => {
  let valid = true;
  const errorsCopy = { cnpj: "", name: "" };

  const cnpjError = validateCNPJ(cnpj);
  if (cnpjError) {
    errorsCopy.cnpj = cnpjError;
    valid = false;
  }

  if (!name.trim()) {
    errorsCopy.name = "O nome é obrigatório.";
    valid = false;
  }

  setErrors(errorsCopy);
  return valid;
};
