import cls from "./navBar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/themeSwitcher";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.navbar__links, {}, [className])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>MainPage</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>AboutPage</AppLink>
            </div>
        </div>
    );
};