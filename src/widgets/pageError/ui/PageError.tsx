import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";

export const PageError = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError)}>
      <p>{t("Что-то пошло не так")}</p>
      <Button onClick={handleClick}>{t("Обновить страницу")}</Button>
    </div>
  );
};
