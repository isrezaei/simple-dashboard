import {Avatar, Box, IconButton, Stack, TextField, Typography, useTheme} from "@mui/material";
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import {cyan, deepPurple, teal} from "@mui/material/colors"
import {useRecoilState} from "recoil";
import {HandelDashboard, HandelTranslation, ThemeMood} from "../../Recoil/atoms.js";
import {useTranslation} from "react-i18next";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"

const Header = () => {


    const [theme, setTheme] = useRecoilState(ThemeMood)
    const [dashboard, setDashboard] = useRecoilState(HandelDashboard)
    const [translation, setTranslation] = useRecoilState(HandelTranslation)

    const {palette: {text, background}, direction} = useTheme()

    const {t} = useTranslation();

    return (
        <Stack
            dir={direction}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            borderRadius={"0 0 8px 8px"} bgcolor={"background.paper"} p={1} mb={3}>

            <Typography display={{xs: "none", md: "block"}}
                        color={text.primary}
                        variant={"subtitle1"}
                        fontWeight={"bold"}>{t("userPanel")}</Typography>


            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1} p={1} borderRadius={2}>
                <IconButton onClick={() => setDashboard(prev => !prev)}
                            size={"small"} color={"primary"}
                            variant={"contained"}>
                    {dashboard ? <AiOutlineMenuUnfold size={25}/> : <AiOutlineMenuFold size={25}/>}
                </IconButton>


                <IconButton onClick={() => setTranslation(prev => !prev)}
                            size={"small"}
                            color={"primary"}
                            variant={"contained"}>
                    <Box> {translation ? "En" : "Fa"}</Box>
                </IconButton>

                <IconButton onClick={() => {
                    localStorage.setItem("color" , theme === "dark" ? 'light' : "dark")
                    setTheme(prev => prev === "dark" ? "light" : "dark")

                }} size={"small"} color={"primary"}
                            variant={"contained"}>
                    {
                        theme === "dark" ? <LightModeIcon sx={{fontSize: 23}}/> : <NightsStayOutlinedIcon sx={{fontSize: 23}}/>
                    }
                </IconButton>
            </Stack>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>

                <IconButton size={"small"} variant="contained" color="primary">
                    <FiSearch size={23}/>
                </IconButton>


                <TextField
                    InputProps={{
                        disableUnderline: true,
                        style: {borderRadius: 10, fontSize: 12, color: text.primary, background: background.default}
                    }}
                    InputLabelProps={{
                        style: {fontSize: 12, color: text.primary}
                    }}
                    sx={{
                        width: "350px",
                        '@media (min-width: 320px)':
                            {
                                width: "150px",
                            },
                        '@media (min-width: 600px)':
                            {
                                width: "250px",
                            },
                        '@media (min-width: 800px)':
                            {
                                width: "350px",
                            },
                    }
                    }
                    dir={"rtl"}
                    label={t("searchHere")}
                    multiline
                    maxRows={4}
                    size={"small"}
                    variant="filled"
                />
            </Stack>


            <Stack direction={"row"}
                   justifyContent={"center"}
                   alignItems={"center"}
                   gap={1}>
                <Typography display={{xs: "none", md: "block"}}
                            color={text.primary}
                            variant={"caption"}
                            fontWeight={"bold"}>{t("username")}
                </Typography>
                <Avatar sx={{bgcolor: deepPurple[200] , fontWeight : "bold"}}>{t("username").slice(0, 2).toUpperCase()}</Avatar>
            </Stack>

        </Stack>
    );
};

export default Header;