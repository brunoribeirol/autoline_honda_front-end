import React, { useEffect, useState } from "react";
import { deleteCar, getCars } from "../../services/Car";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Delete, Visibility, Edit, AddCircle } from "@mui/icons-material";

type Car = {
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
  specification: {
    category: string;
    model: string;
    version: string;
  };
};

const ListCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCars();
  }, []);

  function getAllCars() {
    getCars()
      .then((response) => {
        // Ajusta o mapeamento para garantir que 'specification' tenha um valor padrão
        const carsWithSpecification = response.data.map((car: any) => ({
          ...car,
          specification: car.specification || {
            model: "",
            category: "",
            version: "",
          },
        }));

        setCars(carsWithSpecification); // Atualiza o estado com os dados mapeados
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeCar(chassis: string) {
    console.log("Deleting car with chassis:", chassis);

    deleteCar(chassis)
      .then(() => {
        console.log(`Car with chassis ${chassis} deleted successfully.`);
        getAllCars();
      })
      .catch((error) => {
        console.error("Error deleting car:", error);
      });
  }

  return (
    <div>
      <h2 className="text-center" style={{ margin: "15px" }}>
        Carros
      </h2>
      <Stack direction="row">
        <button
          type="button"
          className="btn btn-warning ml-2"
          onClick={() => navigate("/")}
        >
          Voltar
        </button>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={() => navigate("/add-car")}
          size="large"
          sx={{
            "&:hover": {
              scale: 1.1,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            },
            transition: "0.25s",
          }}
        >
          Adicionar
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  MODELO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CATEGORIA
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  PREÇO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CONDIÇÃO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CÂMBIO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  ANO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  VERSÃO
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  KM
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  MOTOR
                </Typography>
                </TableCell>
              <TableCell>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  COMBUSTÍVEL
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  COR
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  TAMANHO RODA
                </Typography>
              </TableCell>
              <TableCell>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  CHASSI
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  AÇÕES
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.chassis}>
                <TableCell>{car.specification?.model}</TableCell>
                <TableCell>{car.specification?.category}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>{car.carCondition}</TableCell>
                <TableCell>{car.transmission}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.specification?.version}</TableCell>
                <TableCell>{car.mileage}</TableCell>
                <TableCell>{car.engine}</TableCell>
                <TableCell>{car.fuelType}</TableCell>
                <TableCell>{car.color}</TableCell>
                <TableCell>{car.wheelSize}</TableCell>
                <TableCell>{car.chassis}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this car?"
                          )
                        ) {
                          removeCar(car.chassis);
                        }
                      }}
                    >
                      Apagar
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListCars;
