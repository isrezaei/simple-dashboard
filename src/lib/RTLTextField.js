import {styled} from "@mui/material";
import TextField from "mui-rtl-textfield";

export const RTLTextField = styled(TextField)({
    direction: 'rtl',
    textAlign: 'right',
    '& .MuiInputLabel-formControl': {
        right: 20,
        left: 'unset',
    },
    '& .MuiInputBase-input': {
        textAlign: 'right',
    },
});