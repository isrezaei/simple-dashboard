import React from 'react';
import {Checkbox, Stack, Typography, useTheme} from "@mui/material";
// import ClientCaptcha from "react-client-captcha";
import {useTranslation} from "react-i18next";

const Captcha = () => {

    const {t} = useTranslation();

    const {palette : {background , text}} = useTheme();


    return (
        <Stack width={"full"} dir={"rtl"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                <Checkbox defaultChecked color="primary" />
                <Typography fontSize={12}>{t("remember me")}</Typography>
            </Stack>

            {/*<ClientCaptcha*/}
            {/*    backgroundColor={background.default}*/}
            {/*    fontColor={text.primary}*/}
            {/*    captchaCode={() => null}*/}
            {/*    height={25}*/}
            {/*    width={95}/>*/}

        </Stack>
    );
};

export default Captcha;