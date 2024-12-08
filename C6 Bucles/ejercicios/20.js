function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var suma = 0;
   var i;
   for (i=1;i<=n;i++) {
      suma = suma + i;
      //console.log(suma);
      if (suma>100) break;
   }
   //console.log(suma);
   return suma;
}

module.exports = sumarHastaNConBreak;
