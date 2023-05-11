import React from 'react';
import {Stack, Typography} from "@mui/material";
import {Image} from "mui-image";
import {useRecoilValue} from "recoil";
import {ThemeMood} from "../../Recoil/atoms.js";
import {useTranslation} from "react-i18next";

const Header = () => {
    const mood = useRecoilValue(ThemeMood)
    const {t} = useTranslation();
    return (
        <Stack
            width={180}
            m={"auto"}
            px={1}
            py={2}
            borderRadius={2}
            bgcolor={"background.paper"}
            alignItems={"center"}
            justifyContent={"center"}>
            <Image src={mood ? "/SharifDark.png" : "/Sharif.png"} width={120}/>
            <Typography variant={"subtitle2"} fontWeight={'bold'}>{t("sharif")}</Typography>
            <Typography variant={"overline"}>{t("log in to your account")}</Typography>
        </Stack>
    );
};

export default Header;