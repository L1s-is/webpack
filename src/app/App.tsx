import "./styles/index.scss";
import { useTheme } from "app/providers/themeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { NavBar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [ theme ])}>
      <Suspense fallback="...">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
