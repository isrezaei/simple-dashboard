import React, {useMemo} from 'react';
import {Box, Grid, LinearProgress, Stack, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Chart} from "react-chartjs-2";

const DummyProduct = [
    {
        name: "productOne",
        rate: 75
    },
    {
        name: "productTwo",
        rate: 35
    },
    {
        name: "productThree",
        rate: 45
    },
    {
        name: "productFour",
        rate: 23
    },

]


const Products = () => {

    const {t} = useTranslation();
    const {palette: {text}} = useTheme()

    return (
        <Grid item p={1} xs={11} md={9} lg={6} order={{xs: 8}} >

            <Stack p={2} spacing={1} bgcolor={"background.paper"} borderRadius={5}>
                <Typography color={text.primary} fontSize={12} textAlign={"center"}>{t("monthlySalesStatistics")}</Typography>
                {
                    DummyProduct.map(({name, rate}, index) => {

                        return (
                            <Stack key={name}
                                   p={1}
                                   borderRadius={3}
                                   bgcolor={"background.default"}
                                   direction={"row"}
                                   justifyContent={"space-between"}
                                   alignItems={"center"}
                                   width={"full"}>

                                <Typography color={text.primary} fontSize={10}>{index + 1}</Typography>
                                <Typography color={text.primary} fontSize={10}>{t(name)}</Typography>

                                <Box width={{xs: 180, md: 350}}>
                                    <LinearProgress color={"secondary"}
                                                    sx={{borderRadius: 5}}
                                                    variant="determinate"
                                                    value={rate}/>
                                </Box>

                                <Typography color={text.primary} fontSize={12}>
                                    %{rate}
                                </Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Grid>
    );
};

export default Products;