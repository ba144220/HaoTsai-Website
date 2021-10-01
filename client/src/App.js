import React from "react";
import Layout from "./Container/Layout/Layout";

import { ThemeProvider } from "@mui/styles";
import { theme } from "./theme";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <LandingPage />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
