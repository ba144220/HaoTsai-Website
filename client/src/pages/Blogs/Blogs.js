import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Preview from "./Preview/Preview";

import { Typography, useTheme } from "@mui/material";

const Blogs = () => {
    const theme = useTheme();

    return (
        <Container maxWidth={"lg"}>
            <Grid container spacing={0} sx={{ position: "relative" }}>
                <Grid
                    item
                    md={7}
                    sm={12}
                    xs={12}
                    sx={{
                        backgroundColor: "yellow",
                        padding: 1,
                        paddingRight: { md: 0.5, sm: 0, xs: 0 },
                        paddingBottom: { md: 1, sm: 0.5, xs: 0.5 },
                        paddingLeft: 0,

                        position: "relative",
                        minHeight: "100px",
                    }}
                >
                    <img
                        src="https://picsum.photos/800/500"
                        style={{ width: "100%", height: "100%", border: "solid 2px grey" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 15,
                            bottom: 15,
                            margin: theme.spacing(1),
                            //backgroundColor: "lightGreen",
                            color: "white",
                        }}
                    >
                        <Typography variant="h4" noWrap>
                            我是大標題
                        </Typography>
                        <Typography variant="subtitle2">閱讀更多...</Typography>
                    </div>
                </Grid>
                <Grid item md={5} sm={12} xs={12} sx={{ backgroundColor: "yellow" }}>
                    <Grid container spacing={0} sx={{ height: "100%" }}>
                        <Grid
                            item
                            md={12}
                            sm={6}
                            xs={6}
                            sx={{
                                backgroundColor: "red",

                                minHeight: "100px",
                                aspectRatio: "16/9",
                                padding: 1,
                                paddingLeft: { md: 0.5, sm: 0, xs: 0 },
                                paddingBottom: { md: 0.5, sm: 1, xs: 1 },
                                paddingTop: { md: 1, sm: 0.5, xs: 0.5 },
                                paddingRight: { md: 0, sm: 0.5, xs: 0.5 },
                                position: "relative",
                            }}
                        >
                            <img
                                src="https://picsum.photos/800/800"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "solid grey 2px",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    left: 10,
                                    bottom: 10,
                                    margin: theme.spacing(1),
                                    //backgroundColor: "lightGreen",
                                    color: "white",
                                }}
                            >
                                <Typography variant="h4" noWrap noWrap>
                                    我是大標題
                                </Typography>
                                <Typography variant="subtitle2">閱讀更多...</Typography>
                            </div>
                        </Grid>
                        <Grid
                            item
                            md={12}
                            sm={6}
                            xs={6}
                            sx={{
                                backgroundColor: "blue",

                                position: "relative",

                                minHeight: "100px",
                                aspectRatio: "16/9",

                                padding: 1,
                                paddingLeft: { md: 0.5, sm: 0.5, xs: 0.5 },
                                paddingBottom: 1,
                                paddingTop: 0.5,
                                paddingRight: 0,
                            }}
                        >
                            <img
                                src="https://picsum.photos/600/500"
                                style={{ width: "100%", height: "100%", border: "2px grey solid" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    left: 10,
                                    bottom: 10,
                                    margin: theme.spacing(1),
                                    //backgroundColor: "lightGreen",
                                    color: "white",
                                }}
                            >
                                <Typography variant="h4" noWrap>
                                    我是大標題
                                </Typography>
                                <Typography variant="subtitle2">閱讀更多...</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Container sx={{ width: "100%", backgroundColor: "red" }}>a</Container>
        </Container>
    );
};

export default Blogs;
