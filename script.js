function sumar(a, b) {
  return a + b;
}

console.log("Suma 2 + 3 =", sumar(2, 3));
console.log("hola mundo");

if (typeof module !== "undefined") {
  module.exports = sumar;
}
