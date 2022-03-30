import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f8f5f2',
        },
        secondary: {
            main: '#232323',
        },
        text: {
            primary: '#222525',
            secondary: '#f2f7f5',
        },
        button: {
            background: '#faae2b',
            text: '#00473e',
        },
        typography: {
            fontFamily: 'Roboto',
        }
    }
})

console.log(theme);