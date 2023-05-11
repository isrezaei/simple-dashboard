import React, {useEffect, useState} from 'react';
import {Box, Grid, Stack} from "@mui/material";
import Clock from "react-clock";

import 'react-clock/dist/Clock.css';

const DateTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <Grid item xs={5} md={3} lg={2} p={1} width={"full"} order={{xs: 1}}>
            <Stack justifyContent={"center"}
                   alignItems={"center"}
                   width={"full"}
                   bgcolor={"background.paper"}
                   borderRadius={5}
                   p={2}>
                <Clock value={time}
                       renderNumbers={true}/>
            </Stack>
        </Grid>
    );
};

export default DateTime;