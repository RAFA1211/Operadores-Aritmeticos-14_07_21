// //Pos Incremento 

// let num = 0

// num ++;
// console.log(num);


// num ++;
// console.log(num);

// num += 2
// console.log(num);


// //Pre Incremento 
// let a = 4
// let z = ++a 
// console.log(z)

// num = 4 
// ++num;
// console.log(num);


// num = 4;
// num++;
// console.log(num)

// // Jeraquia de Operadores 

// num =( 8-2*5+8%10/5);
// console.log(num)

//Pedir 2 datos por pantalla y almacenarlo en 2 variables
//diferentes
//Variable 1(num1)  Variable2(numero2)
//Realizar todas las operaciones aritmeticas vistas en clase 
//Extra: Por medio de una ventana emergente (alert), dar la máxima 
//información del dessarrollador del aplicativo en Cuestión 
// Usar los máximos 

addEventListener("DOMContentLoaded", function(){
  
let n1, n2, resultado; 
n1=prompt(`Ingrese el Primer Número`)
n2=prompt (`Ingrese el Segundo Número`)
console.log(`El primer número es:  ` + n1)
console.log(`El segundo número es:  ` + n2)
resultadosuma=(parseInt(n1)+parseInt(n2));
//Operador de Suma
console.log("El resultado de la suma es:   " + resultadosuma);
//Operador de resta
resultadoresta=(parseInt(n1)-parseInt(n2))
console.log("El resultado de la resta es:   " + resultadoresta);
//Operador de Multiplicación 
resultadomultiplicacion=(parseInt(n1)*parseInt(n2))
console.log("El resultado de la multiplicación es:   " + resultadomultiplicacion);
//operador de división
resultadodivision=(parseInt(n1)/parseInt(n2))
console.log("El resultado de la división es:   " + resultadodivision);
// Operador de Modulo 
resultadomodulo=(parseInt(n1)%parseInt(n2))
console.log("El residuo de la división es:   " + resultadomodulo);
//Operador de Posincremento
resultadoposincremento=n1++
console.log("El resultado del posincremento es:   " + resultadoposincremento);

resultadopreincremento=++n1
console.log("El resultado del preincremento es:   " + resultadopreincremento);

  
})
