import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./BugButton.module.scss";

export const BugButton = () => {
  const { t } = useTranslation();
  const [ isError, setIsError ] = useState(false);

  useEffect(() => {
    if (isError) {
      throw new Error("bla");
    }
  });

  const handleClick = () => {
    setIsError(prev => !prev);
  };

  return (
    <Button onClick={handleClick} className={classNames(cls.BugButton)}>{t("Вызвать ошибку")}</Button>
  );
};
