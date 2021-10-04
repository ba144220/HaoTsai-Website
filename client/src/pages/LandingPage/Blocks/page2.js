import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import google_play from "../../../images/google-play-badge.png";
import apple_store from "../../../images/apple-download.png";
import { useTheme } from "@mui/material/styles";

import Iphone2 from "../../../components/svg/iphone2";

const Page2 = () => {
    const theme = useTheme();

    return (
        <Grid
            container
            sx={{
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(10),
                flexDirection: { sm: "column", md: "row-reverse" },
            }}
        >
            <Grid
                item
                sm={12}
                md={6}
                sx={{
                    width: "100%",
                    //border: "dotted 2px orange",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Grid
                    container
                    sx={{
                        position: "relative",
                        //border: "dotted 2px red",
                        display: "flex",
                        flexDirection: "row",
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
                            //border: "dotted 2px yellow",
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
                            倒數計時
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
                                <Typography variant="h4">度過一輩子只有</Typography>
                            </Grid>
                            <Grid item md={12} lg={6} textAlign={{ lg: "left", md: "center" }}>
                                <Typography variant="h4" color="primary">
                                    一次的軍旅回憶
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                sm={12}
                md={6}
                sx={{
                    width: "100%",
                    // border: "dotted 2px orange",
                }}
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <Iphone2 style={{ backgroundColor: "green" }} />
            </Grid>
        </Grid>
    );
};

export default Page2;
