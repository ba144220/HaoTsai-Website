import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import LandingPage from "./pages/LandingPage/LandingPage";

import Layout from "./Container/Layout/Layout";
const App = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
