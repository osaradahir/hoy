const sumar = require("./script");

test("Suma básica", () => {
  expect(sumar(2, 3)).toBe(5);
});
