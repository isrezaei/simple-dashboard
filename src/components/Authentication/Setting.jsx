import {Box, IconButton, Stack} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode.js";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined.js";
import React from "react";
import {useRecoilState} from "recoil";
import {HandelTranslation, ThemeMood} from "../../Recoil/atoms.js";

const Setting = () => {
    const [translation, setTranslation] = useRecoilState(HandelTranslation)
    const [theme, setTheme] = useRecoilState(ThemeMood)
    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} position={"absolute"} top={10} left={10}>
            <IconButton onClick={() => {
                localStorage.setItem("color" , theme === "dark" ? 'light' : "dark")
                setTheme(prev => prev === "dark" ? "light" : "dark")
            }}
                        size={"small"} color={"primary"}
                        variant={"contained"}>
                {
                    theme === "dark" ? <LightModeIcon sx={{fontSize: 23}}/> : <NightsStayOutlinedIcon sx={{fontSize: 23}}/>
                }
            </IconButton>
            <IconButton onClick={() => setTranslation(prev => !prev)}
                        size={"small"}
                        color={"primary"}
                        variant={"contained"}>
                <Box> {translation ? "En" : "Fa"}</Box>
            </IconButton>
        </Stack>
    );
};

export default Setting;