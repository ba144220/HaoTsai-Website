import React from "react";

import { useTheme } from "@mui/material/styles";

const Preview = ({ main }) => {
    const theme = useTheme();
    return (
        <div
            style={{
                margin: theme.spacing(1),
                backgroundColor: "green",
                aspectRatio: main ? "3/2" : "",

                position: "absolute",
                bottom: 0,
            }}
        >
            <div>a</div>
            <div>b</div>
            <div>b</div>
            <div>b</div>
        </div>
    );
};

export default Preview;
