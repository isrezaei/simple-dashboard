import  {useState} from 'react';
import {Controller} from "react-hook-form";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility.js";
import VisibilityOff from "@mui/icons-material/VisibilityOff.js";
import {useTranslation} from "react-i18next";

const Password = ({control , errors}) => {

    const [showPassword, setShowPassword] = useState(false);


    const {t} = useTranslation();


    return (
        <Controller
            control={control}
            name="password"
            rules={{required: true}}
            render={({
                         field: {onChange, onBlur, value, name, ref},
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    variant="filled"
                    size={"small"}
                    onChange={onChange}
                    label={t("enter your password")}
                    fullWidth
                    error={!!errors.password}
                    InputLabelProps={{
                        style: {
                            fontSize: 13,
                        }
                    }}
                    InputProps={{
                        style: {
                            fontSize: 12,
                            background : "background.paper"
                        },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=>setShowPassword(show => !show)}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility fontSize={"small"}/> : <VisibilityOff fontSize={"small"}/> }
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        />
    );
};

export default Password;