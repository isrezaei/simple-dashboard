import React from 'react';
import {Controller} from "react-hook-form";
import {TextField} from "@mui/material";
import {useTranslation} from "react-i18next";

const Username = ({control , errors}) => {

    const {t} = useTranslation();


    return (
        <Controller
            control={control}
            name="username"
            rules={{required: true}}
            render={({
                         field: {onChange, onBlur, value, name, ref},
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <TextField
                    variant="filled"
                    size={"small"}
                    onChange={onChange}
                    label={t("enter your username")}
                    fullWidth
                    error={!!errors.username}
                    InputLabelProps={{
                        style: {
                            fontSize: 13,
                        }
                    }}
                    InputProps={{
                        style: {
                            fontSize: 12,
                            background : "background.paper"
                        }
                    }
                    }
                />
            )}
        />
    );
};

export default Username;