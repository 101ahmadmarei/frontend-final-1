import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF',
        },
        primary: {
            light: '#1B4B66',
            main: '#1B4B66',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#F4F4F4',
            main: '#F4F4F4',
            contrastText: '#171520'
        },
        error: {
            main: '#B00020'
        },
        textGray: {
            main: '#B6B6B6'
        },
        lowEmphasis:{
            main:'#626262'
        },
        info: {
            main: '#FF8CAB',
            contrastText: '#B6B6B6'
        }
    },

    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                ".Mui-expanded.MuiAccordionSummary-content": {
                    margin: "0"
                }
            }
        }
    },
    breakpoints: {
        keys: ["xs", "sm", "md", "lg", "xl"],
        values: {
            "xs": 0,
            "sm": 600,
            "md": 900,
            "lg": 1240,
            "xl": 1536
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },

});