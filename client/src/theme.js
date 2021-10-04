import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            dark: "#5a7f1b",
            main: "#8aae4a",
            light: "#bce079",
        },
        secondary: {
            dark: "c9883a",
            main: "#ffb868",
            light: "ffea98",
        },
    },
    mixins: {
        toolbar: {
            minHeight: 56,
            maxHeight: 64,
        },
    },
});
