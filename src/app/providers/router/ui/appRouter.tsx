import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";

function AppRouter() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={<div className="content-main">{t("Загрузка")}</div>}>
      <Routes>
        { Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<div className="content-main">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
