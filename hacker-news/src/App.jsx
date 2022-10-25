import React, {useEffect} from 'react';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";

const App = () => {
    useEffect(() => {
        if (localStorage.getItem('theme')) {
            const link = document.getElementById("theme-link");

            link.setAttribute("href", localStorage.getItem('theme'));
        }
    }, [])

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;