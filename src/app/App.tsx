import "./styles/index.scss"
import {Routes, Route, Link} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/aboutPage";
import {MainPage} from "pages/mainPage";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme} >Toggle theme</button>
        <Link to={"/"}>MainPage</Link>
        <Link to={"/about"}>AboutPage</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/"} element={<MainPage />} />
            </Routes>
        </Suspense>
    </div>
}