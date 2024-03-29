import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./notFoundPage.module.scss";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFoundPage)}>
      {t("Страница не найдена")}
    </div>
  );
}

export default NotFoundPage;
