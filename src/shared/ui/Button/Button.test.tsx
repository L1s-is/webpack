import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button:", () => {
  const someText = "some text";
  test("тестируем рендер кнопки", () => {
    render(<Button>{someText}</Button>);
    expect(screen.getByText(someText)).toBeInTheDocument();
  });
  test("тестируем рендер кнопки с классом", () => {
    render(<Button theme={ThemeButton.CLEAR}>{someText}</Button>);
    expect(screen.getByText(someText)).toHaveClass(ThemeButton.CLEAR);
    screen.debug();
  });
});
