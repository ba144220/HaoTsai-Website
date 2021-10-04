import { Container } from "@mui/material";
import React from "react";

//import { useTheme } from "@mui/material/styles";

import Page1 from "./Blocks/page1";
import Page2 from "./Blocks/page2";

const LandingPage = () => {
    //const theme = useTheme();

    return (
        <Container
            sx={{
                // backgroundColor: "blue",
                minWidth: "100%",
                margin: 0,
                p: 0,
            }}
        >
            <Page1 />
            <Page2 />
        </Container>
    );
};

export default LandingPage;
