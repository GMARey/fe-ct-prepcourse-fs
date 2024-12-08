function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a<0 || b<0) return 0;
  var c = a;
  var i = 0;
  for (i=a; i<b; i++) {
    c = c * (i+1);
  }
  return c;
}

module.exports = productoEntreNúmeros;