
/*

// const arr =['a','b','c','d'];

// const bucle1 = (arr) => {

//     for(let cont =0; cont <= 10; cont++){
//         console.log(cont);
//     }

// }

// bucle1(arr);

const arr = [5,3,4,1,10,9,7];
const arr2 = [1, -563, 999, 0 , -1, -999];

// Encontrar el numero mas grande

let mas = arr;

for (let cont  = 1 ; cont < arr.length ; cont++) {
    if (arr[cont] > mas) {
        mas = arr[1];
    }
}
console.log('El numero mas grande: ' + mas);


// Encontrar el numero mas pequeño

let min = arr[0];

for (let cont = 0; cont < arr.length ; cont++) {
    if (arr[cont] < min) {
        min = arr[cont];
    }
}
console.log('El numero mas pequeño es: ' + min);

// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];

const numeros = [1, -563, 999, 0 , -1, -999];

let max = numeros[0];
let minimo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > max) {
    max = numeros[i];
  }
  if (numeros[i] < minimo) {
    min = numeros[i];
  }
}

console.log("El número más grande es: " + max);
console.log("El número más pequeño es: " + min);

// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "23.5 ohms"
// Ohms >= 1


// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];

*/











// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];
console.log(names)
console.log("Posicion de griselo: "+names.indexOf('Griselo'));

// POP elimina el ultimo elemento
console.log("sin: "+names.pop());
console.log(names);

// PUSH agregar un elemento al final del array
// Return es la nueva longitud
console.log("Agregar: sergio "+names.push('Sergio'));
console.log(names);

// SHIFT elimina el primer elemento y recorre el resto una posicion hacia atras
names.shift();
console.log("Quitar primer elemento ");
console.log(names)

// //UNSHITF agrega elemento en primera posicion 
names.unshift('hugo');
console.log("agregar primer elemento")
console.log(names);

// DELETE eliminar primer elemento dejando vacio el lugar
 delete names[0];
 console.log(names);


 //elimina elementos y si es necesario ingresar nuevos en el arreglo
//console.log(names);
names.splice(1,0, 'hugo','carlos');
console.log(names);

//SLICE corta el array de (index inicial, index final) y crea uno nuevo con ese rango
/*
const ar = names.slice(2,4);
console.log(ar);

//sort()
// reverse() investigar

// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


names.forEach((elemento, index, arr) => {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});

// map
// Conserva la integridad del array/objeto original y crea uno nuevo a partir de instrucciones que le demos

const newNames = names.map(elemento => {
    return elemento.toUpperCase();
});

console.log(newNames);

// filter
const carrito = [2000, 50, 500, 1500, 999.99];

const carritoFiltrado = carrito.filter(elemento =>{
    return elemento <= 1500;
})

console.log(carritoFiltrado);


*/