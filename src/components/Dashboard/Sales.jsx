import React from 'react';
import {Button, Grid, Stack, Typography, useTheme} from "@mui/material";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import CountUp from 'react-countup';
import {useTranslation} from "react-i18next";


const Sales = () => {

    const {palette: {text, primary, error, info, success}, direction} = useTheme()

    const {t} = useTranslation();

    const information = [
        {
            count: 1000,
            topic: "sold",
            icon: <AssessmentOutlinedIcon/>,
            background: primary.dark,
            badge: "#ff48a2"
        },
        {
            count: 300,
            topic: "ordersList",
            icon: <ArticleOutlinedIcon/>,
            background: error.dark,
            badge: "#4ef32d"
        },
        {
            count: 20,
            topic: "salesAmount",
            icon: <MonetizationOnOutlinedIcon/>,
            background: info.dark,
            badge: "#30b0fa"
        },
        {
            count: 116,
            topic: "customers",
            icon: <InsertEmoticonOutlinedIcon/>,
            background: success.dark,
            badge: "#4c87ff"
        }
    ]


    return (
        <Grid item xs={11} md={9} lg={10} p={1} order={{xs: 3, md: 2}}>

            <Stack dir={direction} p={2} bgcolor={"background.paper"} borderRadius={5}
                   justifyContent={"space-between"}>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack>
                        <Typography color={text.primary}
                                    fontSize={{xs: 15, md: 18}}>{t("todaySalesReport")}</Typography>
                        <Typography color={text.secondary} fontSize={{xs: 12, md: 13}}>{t("salesSummary")}</Typography>
                    </Stack>
                    <Button color={"primary"} size={"small"} variant={"contained"}
                            sx={{height: 35}}>{t("print")}</Button>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-around"} py={2}>
                    {
                        information.map(info => {
                            return (
                                <Stack key={info.topic}
                                       width={{xs: 75, sm: 110, md: 150, lg: 210}}
                                       height={{xs: 85, sm: 100, md: 100, lg: 100}}
                                       bgcolor={info.background}
                                       spacing={.5}
                                       justifyContent={"center"}
                                       alignItems={{xs: "center"}}
                                       borderRadius={2}
                                       p={1}
                                       boxSizing={"border-box"}>
                                    <Stack
                                        width={{xs: 20, md: 30}}
                                        height={{xs: 20, md: 30}}
                                        color={text.primary}
                                        alignItems={"center"} justifyContent={"center"} borderRadius={50}>
                                        {info.icon}
                                    </Stack>
                                    <Typography fontWeight={"bold"} color={text.primary} fontSize={{xs: 15, md: 25}}>
                                        <CountUp end={info.count}/>
                                    </Typography>
                                    <Typography color={text.primary} fontSize={{xs: 11, md: 12}}>
                                        {t(info.topic)}
                                    </Typography>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Stack>
        </Grid>
    );
};

export default Sales;