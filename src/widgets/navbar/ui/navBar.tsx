import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import cls from "./navBar.module.scss";

interface NavBarProps {
    className?: string
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [ className ])}>
      <div className={classNames(cls.navbar__links, {}, [ className ])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t("Главная страница")}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t("О нас")}</AppLink>
      </div>
    </div>
  );
}
