import React from "react";

import Grid from "@mui/material/Grid";

const LandingPage = () => {
    return (
        <Grid container>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "red" }}>
                a
            </Grid>
            <Grid item md={6} xs={12} sx={{ backgroundColor: "red" }}>
                b
            </Grid>
        </Grid>
    );
};

export default LandingPage;
