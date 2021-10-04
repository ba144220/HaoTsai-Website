import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Preview from "./Preview/Preview";

// import { useTheme } from "@mui/material";

const Blogs = () => {
    // const theme = useTheme();
    return (
        <Container maxWidth={"lg"}>
            <Grid container spacing={0}>
                <Grid
                    item
                    md={7}
                    sm={12}
                    xs={12}
                    sx={{ backgroundColor: "black", position: "relative" }}
                >
                    <Preview main />
                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={{ backgroundColor: "yellow" }}>
                    <Grid container spacing={0} sx={{ height: "100%" }}>
                        <Grid
                            item
                            md={12}
                            sm={6}
                            xs={6}
                            sx={{ backgroundColor: "red", position: "relative" }}
                        >
                            <Preview />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} sx={{ backgroundColor: "blue" }}>
                            <Preview />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Blogs;
