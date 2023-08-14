import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar, testId as sidebarTestId } from "./Sidebar";

describe("Sidebar:", () => {
  const someClass = "test";
  test("тестируем рендер сайдбара с доп классом", () => {
    renderWithTranslation(<Sidebar className={someClass} />);
    const sidebar = screen.getByTestId(sidebarTestId.sidebar);
    expect(sidebar).toHaveClass(someClass);
  });
  test("тестируем рендер сайдбара с доп классом", () => {
    renderWithTranslation(<Sidebar />);
    const sidebar = screen.getByTestId(sidebarTestId.sidebar);
    const toggleButton = screen.getByTestId(sidebarTestId.toggleButton);
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass("isCollapsed");
  });
});
