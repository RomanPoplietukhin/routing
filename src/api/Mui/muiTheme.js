import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "light",
        common: {
            black: '#000',
            white: '#fff',
        },

        background: {
            main: '#004643',
            secondary: '#abd1c6',
            buttonBg: '#f9bc60',
        },
        text: {
            main: '#fffffe',
            secondary: '#001e1d',
            plainText: '#abd1c6',
        },
        card: {
            main: '#abd1c6',
        },


            headline: '#fffffe',
            paragraph: '#abd1c6',
            button: '#f9bc60',
            buttonText: '#001e1d',

        // secondary: {
        //     main: '#232323',
        // },
        // text: {
        //     primary: '#222525',
        //     secondary: '#f2f7f5',
        // },
        // button: {
        //     background: '#faae2b',
        //     text: '#00473e',
        // },
        // typography: {
        //     fontFamily: 'Roboto',
        // }
    },
    typography: {
        fontFamily: 'Roboto',
        // fontSize: 16,
    },
    spacing: 4
    // zIndex: {
    //     modal: 0,
    //     mobileStepper: 0,
    //     snackbar: 0,
    //     tooltip: 0,
    //     drawer: 0,
    //     speedDial: 0
    // }
})

