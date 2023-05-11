import {
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {Box, Grid, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useRecoilValue} from "recoil";
import {HandelTranslation} from "../../Recoil/atoms.js";
import {labelsEN, labelsFA} from "./Labels.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const AreaChart = () => {

    const {palette: {text}} = useTheme()

    const {t} = useTranslation();

    const translation = useRecoilValue(HandelTranslation)
    const labels = translation ? labelsFA : labelsEN

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: '',
                data: labels.map(() => Math.random({min: 0, max: 1000})),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: '',
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: text.primary,
                    },
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: text.primary,
                    },
                },
            },
        },
    };

    return (
        <Grid item xs={11} md={6} lg={4} p={1} order={{xs: 5}}>
            <Box width={"full"} p={2} bgcolor={"background.paper"} borderRadius={5}>
                <Typography color={text.primary}
                            textAlign={"center"}
                            fontSize={12}>
                    {t("bestSellingProducts")}
                </Typography>
                <Line options={options} data={data}/>
            </Box>
        </Grid>
    );
};

export default AreaChart;