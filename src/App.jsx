import Authentication from "./page/Authentication.jsx";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Dashboard from "./page/Dashboard.jsx";
import {useRecoilValue} from "recoil";
import {HandelTranslation, ThemeMood} from "./Recoil/atoms.js";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {resources} from "./i18n.js";

function App() {

    const mood = useRecoilValue(ThemeMood)
    const translation = useRecoilValue(HandelTranslation)

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Authentication/>,
        },
        {
            path: "/dashboard",
            element: <Dashboard/>,
        },
    ]);

    const Theme = createTheme({

        direction: translation ? "rtl" : "ltr",

        palette: {
            mode: mood ? "dark" : "light",

            primary: {
                main: mood ? "#90f9c1" : '#6172e3',
                light: mood ? "#c3ffdf" : '#757de8',
                dark: mood ? "#01b68d" : '#549dff',
            },
            secondary: {
                main: mood ? "#ffcc80" : '#f50057',
                light: mood ? "#ffffb1" : '#ff4081',
                dark: mood ? "#bb7405" : '#c51162',
            },
            success: {
                main: mood ? "#c6d6a5" : '#4caf50',
                light: mood ? "#ecffd7" : '#81c784',
                dark: mood ? "#5fad0d" : '#8bee89',
            },
            warning: {
                main: mood ? "#ffb74d" : '#ff9800',
                light: mood ? "#ffeb99" : '#ffb74d',
                dark: mood ? "#a16a00" : '#f57c00',
            },
            error: {
                main: mood ? "#ef9a9a" : '#f44336',
                light: mood ? "#ffcccb" : '#e57373',
                dark: mood ? "#b01114" : '#ffa1a1',
            },
            info: {
                main: mood ? "#81d4fa" : '#2196f3',
                light: mood ? "#b6ffff" : '#64b5f6',
                dark: mood ? "#0074a1" : '#acb6c9',
            },
            background: {
                default: mood ? "#303030" : '#f3f3f3',
                paper: mood ? "#424242" : '#e5e5e5',
            },
            text: {
                primary: mood ? "#f5f5f5" : '#333333',
                secondary: mood ? "#9e9e9e" : '#757575',
            },
        },

        typography: {
            fontFamily: translation ? "IranSans" : "sans-serif",

            h1: {
                fontSize: '2.5rem', // 25 pixels
            },
            h2: {
                fontSize: '2rem', // 20 pixels
            },
            h3: {
                fontSize: '1.75rem', // 17.5 pixels
            },
            h4: {
                fontSize: '1.5rem', // 15 pixels
            },
            h5: {
                fontSize: '1.25rem', // 12.5 pixels
            },
            h6: {
                fontSize: '1rem', // 10 pixels
            },
            subtitle1: {
                fontSize: '1rem', // 10 pixels
            },
            subtitle2: {
                fontSize: '0.875rem', // 8.75 pixels
            },
            body1: {
                fontSize: '1rem', // 10 pixels
            },
            body2: {
                fontSize: '0.875rem', // 8.75 pixels
            },
            button: {
                fontSize: '0.85rem', // 8.5 pixels
            },
            caption: {
                fontSize: '0.75rem', // 7.5 pixels
            },
            overline: {
                fontSize: '0.75rem', // 7.5 pixels
            },

        },
    });

    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources,
            lng: translation ? "fa" : "en",
            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });

    return (
        <Box>
            <ThemeProvider theme={Theme}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Box>
    )
}

export default App
