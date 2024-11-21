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

// type Car = {
//   chassis: string;
//   price: number;
//   color: string;
//   wheelSize: number;
//   fuelType: string;
//   year: number;
//   engine: string;
//   transmission: string;
//   mileage: number;
//   carCondition: string;
//   category: string;
//   model: string;
//   version: string;
//   carChassis: string;
// };
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

  // function getAllCars() {
  //   getCars()
  //     .then((response) => {
  //       setCars(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  function getAllCars() {
    getCars()
      .then((response) => {
        // Ajusta o mapeamento para garantir que 'specification' tenha um valor padrão
        const carsWithSpecification = response.data.map((car: any) => ({
          ...car,
          specification: car.specification || { model: "", category: "", version: "" },
        }));
  
        setCars(carsWithSpecification); // Atualiza o estado com os dados mapeados
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // const getAllCars = () => {
  //   getCars()
  //     .then((response) => {
  //       console.log("Fetched cars:", response.data); // Debug log
  //       // Atualiza o estado com os dados recebidos
  //       setCars(
  //         response.data.map((car: any) => ({
  //           ...car,
  //           specification: car.specification || { category: "", model: "", version: "" },
  //         }))
  //       );
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching cars:", error);
  //       alert("Erro ao carregar os carros.");
  //     });
  // };
  

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

  // // Função para deletar um carro
  // const removeCar = (chassis: string) => {
  //   deleteCar(chassis)
  //     .then(() => {
  //       console.log(`Car with chassis ${chassis} deleted successfully.`);
  //       getAllCars(); // Recarrega a lista após deletar
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting car:", error);
  //       alert("Erro ao deletar o carro.");
  //     });
  // };

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
            <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>MODELO</Typography></TableCell>
            <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>CATEGORIA</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>PREÇO</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>CONDIÇÃO</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>TRANSMISSÃO</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>ANO</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>VERSÃO</Typography></TableCell>
              <TableCell><Typography variant="body1" style={{ fontWeight: "bold" }}>KILOMETRAGEM</Typography></TableCell>
         
              <TableCell align="center"><Typography variant="body1" style={{ fontWeight: "bold" }}>AÇÕES</Typography></TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {cars.map((car) => (
              <TableRow key={car.chassis}>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.category}</TableCell>
                <TableCell>{car.price}</TableCell>
                <TableCell>{car.carCondition}</TableCell>
                <TableCell>{car.transmission}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.version}</TableCell>
                <TableCell>{car.mileage}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={2} justifyContent="right">
                    <Button
                      variant="outlined"
                      startIcon={<Edit />}
                      onClick={() => navigate(`/edit-car/${car.chassis}`)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this car?")) {
                          removeCar(car.chassis);
                        }
                      }}
                    >
                      Apagar
                    </Button>
                    <IconButton
                      aria-label="view"
                      onClick={() => navigate(`/view-car/${car.chassis}`)}
                    >
                      <Visibility />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
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
      <TableCell align="right">
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this car?")) {
                removeCar(car.chassis);
              }
            }}
          >
            Apagar
          </Button>
          <IconButton
            aria-label="view"
            onClick={() => navigate(`/view-car/${car.chassis}`)}
          >
            <Visibility />
          </IconButton>
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
