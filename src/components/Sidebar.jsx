import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button, Stack, Typography, useTheme} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {Image} from "mui-image";
import {useRecoilValue} from "recoil";
import {ThemeMood} from "../Recoil/atoms.js";
import {useTranslation} from "react-i18next";


const dummyData = [
    {
        id: "dashboard",
        icon: <DashboardIcon/>,
        title: "userPanel",
    },
    {
        id: "notification",
        icon: <NotificationsActiveIcon/>,
        title: "notifications",
    },
    {
        id: "shop",
        icon: <ShoppingCartIcon/>,
        title: "orders",
    },
    {
        id: "products",
        icon: <CategoryIcon/>,
        title: "products",
    },
    {
        id: "rate",
        icon: <TrendingUpIcon/>,
        title: "statistics",
    },
    {
        id: "setting",
        icon: <SettingsIcon/>,
        title: "settings",
    },
    {
        id: "logout",
        icon: <LogoutIcon/>,
        title: "logout",
    }
]


const Sidebar = () => {

    const {pathname} = useLocation()
    const navigate = useNavigate();

    const {t} = useTranslation();

    const mood = useRecoilValue(ThemeMood)

    const currentPath = pathname.split('/')[1]

    const {palette: {text}} = useTheme()


    return (
        <Stack width={"full"} spacing={2}>

            <Stack justifyContent={"center"} alignItems={"center"} spacing={2} p={2}>
                <Image src={mood === "dark" ? "/SharifDark.png" : "/Sharif.png"} width={120}/>
                <Typography color={text.primary} variant={"subtitle1"} fontWeight={'bold'}>{t("sharif")}</Typography>
            </Stack>

            {
                dummyData.map(({id, title, icon}) => {
                    return (
                        <Button
                            onClick={() => navigate(`/${id}`)}
                            size={"small"}
                            color={"primary"}
                            variant={id === currentPath ? "contained" : "text"}
                            endIcon={icon}
                            key={id}>
                            <Typography dir={"ltr"}
                                        mx={1}
                                        width={120}
                                        variant={"button"}
                                        fontWeight={"bold"}
                                        textAlign={"start"}>
                                {t(title)}
                            </Typography>
                        </Button>
                    )
                })
            }
        </Stack>
    );
};

export default Sidebar;