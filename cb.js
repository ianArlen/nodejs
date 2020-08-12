const cb = (resultado) => {
  //interpolacion buscar
  console.log(`este es un calback y el resultado es ${resultado}`) //"este es un calback y el resultado es " + resultado
}

const cb2 = (resultado) => {
  console.log('pene');
}
 

const main = (num1,num2,calback) => {
  const resultado = num1 + num2;
  calback(resultado);
}


main(1,2,cb);
main(5,6,cb);
main(9,10,cb);

main(1,2,cb2);
main(5,6,cb2);
main(9,10,cb2);