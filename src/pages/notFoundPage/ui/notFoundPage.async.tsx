import { lazy } from "react";

// @ts-ignore
export const NotFoundPageAsync = lazy(() => new Promise((resolve) => {
  resolve(import("./notFoundPage"));
}));
