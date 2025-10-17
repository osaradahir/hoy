function sumar(a, b) {
  return a + b;
}

console.log("Suma 2 + 3 =", sumar(2, 3));

if (typeof module !== "undefined") {
  module.exports = sumar;
}
