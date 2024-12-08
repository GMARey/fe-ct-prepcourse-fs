function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;
  var i;
  for (i=1;i<=n;i++) {
    suma = suma + i;
    //console.log(suma);
  }
  //console.log(suma);
  return suma;
}

//sumarHastaN(5);

module.exports = sumarHastaN;
