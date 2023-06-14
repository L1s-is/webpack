import "./styles/index.scss"
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/navbar";

export const App = () => {
    const {theme} = useTheme()

    return <div className={classNames("app", {}, [theme])}>
        <NavBar />
        <AppRouter />
    </div>
}