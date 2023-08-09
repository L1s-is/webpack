import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { LangSwitcher } from "widgets/langSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation();
  const [ isCollapsed, setIsCollapsed ] = useState(false);
  const handleClick = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.isCollapsed]: isCollapsed }, [ className ])}>
      <Button type="button" onClick={handleClick}>{t(isCollapsed ? "Раскрыть" : "Скрыть")}</Button>
      <div className={classNames(cls.Switchers, {}, [ className ])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </div>
  );
}
