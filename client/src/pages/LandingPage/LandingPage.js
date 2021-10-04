import React from "react";

import { useTheme } from "@mui/material/styles";

import Page1 from "./Blocks/page1";

const LandingPage = () => {
    const theme = useTheme();

    return (
        <div
            style={{
                backgroundColor: "blue",
                minWidth: "100%",
                margin: 0,
                p: 0,
            }}
        >
            <Page1 />
            <Page1 />
            <Page1 />
        </div>
    );
};

export default LandingPage;
