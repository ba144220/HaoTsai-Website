import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MainIcon from "../../components/svg/mainIcon";

import { useTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { links } from "./data";

const ButtonContainer = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const drawerWidth = 240;

function Layout(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const theme = useTheme();
    const history = useHistory();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ display: "flex", flexDirection: "row" }}>
                <MainIcon />
                <Typography variant="h5" sx={{ marginLeft: theme.spacing(2) }}>
                    好菜
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {links.map((item, index) => (
                    <ListItem button key={item.text} onClick={() => history.push(item.url)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: "rgba(255,255,255,0.5)",
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: "none" }, color: "black" }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <MainIcon />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            marginLeft: theme.spacing(2),
                            color: "black",
                        }}
                    >
                        好菜｜專屬於軍旅的APP
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <ButtonContainer>
                        {links.map((item, i) => (
                            <Button
                                key={i}
                                sx={{ marginRight: theme.spacing(3) }}
                                onClick={() => history.push(item.url)}
                            >
                                {item.text}
                            </Button>
                        ))}
                    </ButtonContainer>
                </Toolbar>
            </AppBar>

            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { sm: "block", md: "none" },
                    "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
}

export default Layout;
