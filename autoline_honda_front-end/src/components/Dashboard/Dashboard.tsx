import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, Divider, Paper, Stack, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard as DashboardType, getDashboard } from '../../services/Dashboard';


const Dashboard: React.FC = () => {
    const [data, setData] = React.useState<DashboardType | null>();

    React.useEffect(() => {
        getDashboard("2024-01-01", "2024-12-31").then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);   

      if (!data){
        return (
            <>...</>
        )
      }

    return (
        <Paper sx={{ padding: 3, borderRadius: 3 }}>
            <Stack direction="column" spacing={5}>
                <Stack direction="column">
                    <Typography variant="h5">{"Venda Por Vendedor"}</Typography>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: data.salesByEmployee.map(e => e.employeeName) }]}
                        series={[{ data: data.salesByEmployee.map(e => e.totalSales) }]}
                        width={1000}
                        height={300}
                    />
                </Stack>

                <Stack direction="column">
                    <Typography variant="h5">{"Dados Por Mês"}</Typography>
                    <Stack direction="row" spacing={2} sx={{ width: "full" }}>
                        <BarChart
                            yAxis={[{ scaleType: 'band', data: data.monthlySales.map(e => e.saleMonth) }]}
                            series={[{ data: data.monthlySales.map(e => e.totalSales)}]}
                            width={1000}
                            height={500}
                            layout='horizontal'
                            xAxis={[
                                {
                                label: 'Vendas Totais',
                                },
                            ]}
                            
                        />
                        <Divider orientation="vertical" flexItem />
                        <BarChart
                            yAxis={[{ scaleType: 'band', data: data.monthlySales.map(e => e.saleMonth) }]}
                            series={[{data: data.monthlySales.map(e => e.totalRevenue)}]}
                            width={1000}
                            height={500}
                            layout='horizontal'
                            xAxis={[
                                {
                                label: 'Receita Total',
                                },
                            ]}
                        />
                    </Stack>
                </Stack>

                <Stack direction="column">
                    <Typography variant="h5">{"Venda Por Vendedor"}</Typography>
                    <BarChart
                        xAxis={[{ scaleType: 'band', data: data.salesByEmployee.map(e => e.employeeName) }]}
                        series={[{ data: data.salesByEmployee.map(e => e.totalSales) }]}
                        width={1000}
                        height={300}
                    />
                </Stack>
            </Stack>
        </Paper>
    )
}

export default Dashboard;