import cls from "./ThemeSwitcher.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import {Theme} from "app/providers/themeProvider";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}
        theme={ThemeButton.THEME_TOGGLE}>
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};