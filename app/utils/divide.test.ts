import { divide } from "./divide";

test("Test oka", () => {
  expect(divide(10, 5)).toBe(2);
});
test("Test error", () => {
    expect(divide(10, 0)).toBe("Divisor debe ser diferente de cero");
  });