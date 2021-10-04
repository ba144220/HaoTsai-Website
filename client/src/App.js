import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import LandingPage from "./pages/LandingPage/LandingPage";

import Layout from "./container/Layout/Layout";
import Blogs from "./pages/Blogs/Blogs";
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
                        <Route exact path="/blogs" component={Blogs} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
