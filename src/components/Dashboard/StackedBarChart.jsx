import {Box, Grid, Typography, useTheme} from "@mui/material";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar, Line} from 'react-chartjs-2'
import {useTranslation} from "react-i18next";
import {useRecoilValue} from "recoil";
import {HandelTranslation} from "../../Recoil/atoms.js";
import {labelsEN, labelsFA} from "./Labels.js";
import {useMemo} from "react";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const StackedBarChart = () => {

    const {palette: {text, background}} = useTheme()
    const {t} = useTranslation();

    const translation = useRecoilValue(HandelTranslation)
    const labels = translation ? labelsFA : labelsEN

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: '',
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
                backgroundColor: 'rgb(75, 192, 192)',
            },
            {
                label: '',
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
                backgroundColor: 'rgb(53, 162, 235)',
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {},
            },
            y: {
                stacked: true,
                ticks: {},
            },
        },
    };

    const render = useMemo(() =>   <Bar options={options} data={data}/>, [labels])

    return (
        <Grid item width={"full"} p={1} xs={11} md={6} lg={4} order={{xs: 6}}>

            <Box width={"full"} p={2} bgcolor={"background.paper"} borderRadius={5}>
                <Typography color={text.primary}
                            textAlign={"center"}
                            fontSize={12}>
                    {t("bestSellingProducts")}
                </Typography>
                {render}
            </Box>

        </Grid>
    );
};

export default StackedBarChart;