import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

function AppRouter() {
  return (
    <Suspense fallback={<div className="content-main">Loading...</div>}>
      <Routes>
        { Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={<div className="content-main">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
