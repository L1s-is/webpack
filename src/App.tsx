import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import "./index.scss"
import {AboutPageAsync} from "./pages/aboutPage/aboutPage.async";
import {MainPageAsync} from "./pages/mainPage/mainPage.async";

export const App = () => {
    return <div className="app">
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