import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import google_play from "../../../images/google-play-badge.png";
import apple_store from "../../../images/apple-download.png";
import { useTheme } from "@mui/material/styles";

import Iphone1 from "../../../components/svg/iphone1";

const Page1 = () => {
    const theme = useTheme();

    return (
        <Grid container sx={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(10) }}>
            <Grid
                item
                sm={12}
                md={6}
                sx={{
                    width: "100%",
                    border: "dotted 2px orange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    sx={{
                        position: "relative",
                        border: "dotted 2px red",
                        display: "flex",
                        flexDirection: "row-reverse",
                        //justifyContent: { xs: "center", sm: "center", md: "end" },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={10}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            border: "dotted 2px yellow",
                        }}
                        data-aos="fade-right"
                        //data-aos-delay="800"
                        data-aos-duration="800"
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                marginBottom: theme.spacing(4),
                                marginTop: theme.spacing(5),
                            }}
                        >
                            好菜
                        </Typography>

                        <Grid
                            container
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: theme.spacing(4),
                            }}
                        >
                            <Grid item md={12} lg={6} textAlign={{ lg: "right", md: "center" }}>
                                <Typography variant="h4">全台灣最大的</Typography>
                            </Grid>
                            <Grid item md={12} lg={6} textAlign={{ lg: "left", md: "center" }}>
                                <Typography variant="h4" color="primary">
                                    軍旅匿名社群
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            spacing={2}
                            sx={{ marginBottom: theme.spacing(9) }}
                        >
                            <Grid item>
                                <Button sx={{ height: "50px", padding: 0, margin: 0 }}>
                                    <img
                                        src={google_play}
                                        alt=""
                                        style={{ height: "50px" }}
                                        onClick={() => console.log("google")}
                                    />
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button sx={{ height: "50px", padding: 0, margin: 0 }}>
                                    <img
                                        src={apple_store}
                                        alt=""
                                        style={{ height: "50px" }}
                                        onClick={() => console.log("google")}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                sm={12}
                md={6}
                sx={{ width: "100%", border: "dotted 2px orange" }}
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <Iphone1 />
            </Grid>
        </Grid>
    );
};

export default Page1;
