import { classNames } from "shared/lib/classNames/classNames";
import { useTheme, Theme } from "app/providers/themeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button
      className={classNames("", {}, [ className ])}
      onClick={toggleTheme}
      theme={ThemeButton.THEME_TOGGLE}
      aria-label={t("Сменить тему оформления")}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
}
