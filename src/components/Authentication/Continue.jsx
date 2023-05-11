import React from 'react';
import {Button} from "@mui/material";
import {useTranslation} from "react-i18next";

const Continue = ({handelModal , isButtonDisabled}) => {

    const {t} = useTranslation();


    return (
        <Button
            onClick={handelModal}
            size={"small"}
            variant={"contained"}
            type="submit" disabled={isButtonDisabled}>
            {t("Continue")}
        </Button>
    );
};

export default Continue;