import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2'
import {Box, Grid, Typography, useTheme} from "@mui/material";
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
                ticks: {},
            },
            y: {
                stacked: true,
                ticks: {},
            },
        },
    },
};


const VBarChart = () => {

    const {palette: {text}} = useTheme()
    const {t} = useTranslation();

    const translation = useRecoilValue(HandelTranslation)
    const labels = translation ? labelsFA : labelsEN

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => Math.random({min: 0, max: 1000})),
                backgroundColor: 'rgb(252,0,46)',
            },
            {
                label: '',
                data: labels.map(() => Math.random({min: 0, max: 1000})),
                backgroundColor: 'rgba(87,236,223,0.5)',
            },
        ],
    };


    const render = useMemo(() => <Bar options={options} data={data}/>, [labels])

    return (
        <Grid item xs={11} md={6} lg={4} p={1} order={{xs: 4}}>
            <Box width={"full"} p={2} borderRadius={5} bgcolor={"background.paper"}>
                <Typography color={text.primary}
                            textAlign={"center"}
                            fontSize={12}>
                    {t("bestSellingProducts")}
                </Typography>
                {render}
            </Box>

        </Grid>
    )
};

export default VBarChart;