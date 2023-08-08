import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/themeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [ className ])}
      onClick={toggleTheme}
      theme={ThemeButton.THEME_TOGGLE}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
}
