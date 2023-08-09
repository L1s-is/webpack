import { classNames } from "./classNames";

describe("classNames:", () => {
  const selector = "exampleClass";
  const additionalSelectors = [ "testClass", "someClass" ];
  const mods = { isActive: true, isFocused: true };

  test("тестируем с вводом только первого аргумента:", () => {
    expect(classNames(selector)).toBe("exampleClass");
  });

  test("тестируем с вводом доп классов:", () => {
    const expectedValue = `${selector} ${additionalSelectors.join(" ")}`;
    expect(classNames(selector, {}, additionalSelectors)).toBe(expectedValue);
  });

  test("тестируем с вводом доп классов:", () => {
    const expectedValue = `${selector} ${additionalSelectors.join(" ")} isActive isFocused`;
    expect(classNames(selector, { ...mods }, additionalSelectors)).toBe(expectedValue);
  });

  test("тестируем с вводом доп классов:", () => {
    const mods = { isActive: true, isHovered: false };
    const expectedValue = `${selector} ${additionalSelectors.join(" ")} isActive`;
    expect(classNames(selector, { ...mods }, additionalSelectors)).toBe(expectedValue);
  });
});
