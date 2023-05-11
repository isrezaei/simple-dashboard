import React from 'react';
import {Grid, Stack, Typography, useTheme} from "@mui/material";
import jalaali from 'jalaali-js';


const DateCalendar = () => {

    const {palette: {text}} = useTheme()
    const jDate = jalaali.toJalaali(new Date());

    const monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    const monthName = monthNames[jDate.jm - 1];
    const dateStr = `${jDate.jd}`;
    const yearStr = `${jDate.jy}`;

    return (
        <Grid item xs={11} md={3} lg={2} p={1} order={{xs: 2, md: 8}}>
            <Stack p={5} justifyContent={"center"} borderRadius={5} alignItems={"center"} bgcolor={"background.paper"}>

                <Typography color={text.primary} fontSize={45} fontWeight={"bold"}>
                    {dateStr}
                </Typography>

                <Typography color={text.primary} fontSize={15}>
                    {yearStr} {monthName}
                </Typography>
            </Stack>
        </Grid>
    );
};

export default DateCalendar;