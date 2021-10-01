import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: green[500],
        },
    },
});
