import "./styles/index.scss"
import {Routes, Route, Link} from "react-router-dom";
import {Suspense, useContext, useState} from "react";
import {AboutPageAsync} from "./pages/aboutPage/aboutPage.async";
import {MainPageAsync} from "./pages/mainPage/mainPage.async";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme} >Toggle theme</button>
        <Link to={"/"}>MainPage</Link>
        <Link to={"/about"}>AboutPage</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/about"} element={<AboutPageAsync />} />
                <Route path={"/"} element={<MainPageAsync />} />
            </Routes>
        </Suspense>
    </div>
}