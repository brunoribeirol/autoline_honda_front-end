import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

import {
  Box,
  Typography,
  Divider,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard as DashboardType,
  getDashboard,
} from "../../services/Dashboard";

const Dashboard: React.FC = () => {
  const [data, setData] = React.useState<DashboardType | null>();

  React.useEffect(() => {
    getDashboard("2024-01-01", "2024-12-31")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!data) {
    return <>...</>;
  }

  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }}>
      <Stack direction="column" spacing={5}>
        <Stack direction="column">
          <Typography variant="h5">{"Vendas Por Vendedor"}</Typography>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: data.salesByEmployee.map((e) => e.employeeName),
              },
            ]}
            series={[{ data: data.salesByEmployee.map((e) => e.totalSales) }]}
            width={1000}
            height={300}
            yAxis={[{ label: "Vendas Totais" }]}
          />
        </Stack>

        <Stack direction="column">
          <Typography variant="h5">{"Dados Por Mês"}</Typography>
          <Stack direction="row" spacing={2} sx={{ width: "full" }}>
            <BarChart
              yAxis={[
                {
                  scaleType: "band",
                  data: data.monthlySales.map((e) => e.saleMonth),
                },
              ]}
              series={[{ data: data.monthlySales.map((e) => e.totalSales) }]}
              width={1000}
              height={500}
              layout="horizontal"
              xAxis={[
                {
                  label: "Vendas Totais",
                },
              ]}
            />
            <Divider orientation="vertical" flexItem />
            <BarChart
              yAxis={[
                {
                  scaleType: "band",
                  data: data.monthlySales.map((e) => e.saleMonth),
                },
              ]}
              series={[{ data: data.monthlySales.map((e) => e.totalRevenue) }]}
              width={1000}
              height={500}
              layout="horizontal"
              xAxis={[
                {
                  label: "Receita Total",
                },
              ]}
            />
          </Stack>
        </Stack>

        <Stack direction="column">
          <Typography variant="h5">{"Salário Por Posição"}</Typography>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: data.averageSalaries.map((e) => e.position),
              },
            ]}
            series={[
              {
                data: data.averageSalaries.map((e) => e.averageSalary),
                color: "skyblue",
              },
            ]}
            width={1000}
            height={300}
          />
        </Stack>

        <Stack direction="column">
          <Stack
            direction="row"
            spacing={80}
            justifyContent="center"
            sx={{ width: "full" }}
          >
            <Typography variant="h5">{"Vendas Por Combustível"}</Typography>
            <Typography variant="h5">{"Gerentes x Vendedores"}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ width: "full" }}>
            <PieChart
              colors={["purple", "violet", "pink"]}
              series={[
                {
                  data: data.salesByFuelType.map((e, index) => ({
                    id: index,
                    value: e.totalSales,
                    label: e.fuelType,
                  })),
                },
              ]}
              width={400}
              height={200}
            />
            <Divider orientation="vertical" flexItem />
            <PieChart
              colors={["blue", "red"]}
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: data.employeeSummary.totalManagers,
                      label: "Gerentes",
                    },
                    {
                      id: 1,
                      value: data.employeeSummary.totalSellers,
                      label: "Vendedores",
                    },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Stack>
        </Stack>

        <Stack direction="column">
          <Typography variant="h5">{"Vendas Por Filial"}</Typography>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: data.salesByBranch.map((e) => e.branchName),
              },
            ]}
            series={[{ data: data.salesByBranch.map((e) => e.totalSales) }]}
            width={1000}
            height={300}
          />
        </Stack>

        <Stack direction="column">
          <Typography variant="h5"> {"Histórico de Vendas"} </Typography>
          <LineChart
            xAxis={[
              {
                scaleType: "time",
                data: data.salesInDateRange.map((e) => {
                  const date = new Date(e.saleDate);
                  return new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate(),
                    0
                  );
                }),
                label: "Data da Venda",
              },
            ]}
            series={[
              {
                data: data.salesInDateRange.map((e) => e.finalPrice),
                label: "Valor das Vendas",
                color: "blue",
                strokeWidth: 2,
                marker: { visible: true },
              },
            ]}
            width={1000}
            height={500}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Dashboard;
