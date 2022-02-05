import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f2f7f5',
        },
        secondary: {
            main: '#00473e',
        },
        text: {
            primary: '#00473e',
        },
        button: {
            background: '#faae2b',
            text: '#00473e',
        }
    }
})

console.log(theme);