import { Suspense } from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Routes as AppRoutes } from './Routes';
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import DefaultLayout from "../components/layout/DefaultLayout";

const Router = () => {
    const theme = createTheme();

    const renderRoute = (Layout, route) => (
        <Route
            key={route.path}
            exact
            path={route.path}
            element={
                <Layout Children={route.component} />
            }
        />
    );


    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {AppRoutes.map((route) => renderRoute(DefaultLayout, route))}
                    </Routes>
                </Suspense>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Router;
