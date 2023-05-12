import {Box, Grid, Typography, useTheme} from "@mui/material";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import {Bar, Chart} from 'react-chartjs-2';
import {useTranslation} from "react-i18next";
import {useRecoilValue} from "recoil";
import {HandelTranslation} from "../../Recoil/atoms.js";
import {labelsEN, labelsFA} from "./Labels.js";
import {useMemo} from "react";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);


const MultitypeChart = () => {

    const {t} = useTranslation();
    const {palette: {text}} = useTheme()

    const translation = useRecoilValue(HandelTranslation)
    const labels = translation ? labelsFA : labelsEN

    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: '',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
            },
            {
                type: 'bar',
                label: '',
                backgroundColor: 'rgb(75, 192, 192)',
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: '',
                backgroundColor: 'rgb(53, 162, 235)',
                data: labels.map(() => Math.random({min: -1000, max: 1000})),
            },
        ],
    };

    const render = useMemo(() =>   <Chart type='bar' data={data}/>, [])

    return (
        <Grid item xs={11} md={6} lg={4} p={1} order={{xs: 7}}>
            <Box width={"full"} p={2} bgcolor={"background.paper"} borderRadius={5}>
                <Typography color={text.primary} textAlign={"center"}
                            fontSize={12}>{t("bestSellingProducts")}</Typography>
                {render}
            </Box>
        </Grid>
    );
};

export default MultitypeChart;