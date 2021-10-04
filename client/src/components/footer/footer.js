import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material/styles";

import MainIcon from "../svg/mainIcon";

const Footer = () => {
    const theme = useTheme();
    return (
        <div
            style={{
                width: "100%",
                backgroundColor: theme.palette.background.main,
                color: "white",
                flexGrow: 1,

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Grid container spacing={0}>
                <Grid
                    item
                    md={4}
                    sx={{
                        padding: theme.spacing(4),
                        display: { xs: "none", sm: "none", md: "none", lg: "block" },
                    }}
                >
                    <Container
                        sx={
                            {
                                //border: "dotted 2px green",
                            }
                        }
                    >
                        <div
                            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                        >
                            <MainIcon />
                            <div style={{ marginLeft: theme.spacing(2) }}>
                                <Typography variant="h5">好菜</Typography>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography variant="subtitle1">全台灣最大的</Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        軍旅匿名社群
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    sx={{
                        padding: theme.spacing(4),
                    }}
                >
                    <Container
                        sx={
                            {
                                //border: "dotted 2px green",
                            }
                        }
                    >
                        <Typography variant="h5">商業合作</Typography>

                        <Typography variant="subtitle1">good.dish.tw@gmail.com</Typography>
                    </Container>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    sx={{
                        padding: theme.spacing(4),
                    }}
                >
                    <Container
                        sx={
                            {
                                //border: "dotted 2px green",
                            }
                        }
                    >
                        <Typography variant="h5">聯絡資訊</Typography>

                        <Typography variant="subtitle1">Instagram</Typography>
                        <Typography variant="subtitle1">Facebook</Typography>
                        <Typography variant="subtitle1">品牌官網</Typography>
                    </Container>
                </Grid>
            </Grid>
            <Typography sx={{ margin: "auto", color: "#888888" }}>@2021 HaoTsai</Typography>
        </div>
    );
};

export default Footer;
