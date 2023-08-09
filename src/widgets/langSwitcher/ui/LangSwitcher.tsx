import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import ChangeLangIcon from "shared/assets/icons/icon-lang.svg";

interface LangSwitcherProps {
    className?: string
}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames("", {}, [ className ])}
      onClick={handleClick}
      theme={ThemeButton.CLEAR}
      aria-label={t("Сменить язык")}
    >
      <ChangeLangIcon />
    </Button>
  );
}
