import React, { useEffect } from "react";
import Layout from "./Container/Layout/Layout";

import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <LandingPage />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
