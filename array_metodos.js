// indexOf nos indica en que indice o posicion del array esta el dato que buscamos
const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];

// console.log(names.indexOf('Griselo'));


// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


/* names.forEach((elemento, index, arr) => {
    console.log(elemento);
    console.log(index);
    console.log(arr);
}); */

/* 
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
}); */


// names.forEach( e => console.log(e));

// arr.forEach(valor, index, arr);

//https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319





// Promedio antipode
// Dado un array, devolver un array 
// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]
let arr1=[1, 2, 3, 4, 5, 6]

function arre(n,p){
            n.forEach(function (el) {
                console.log(el*p)
            });
} 
arre(arr1,4)



// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

let posi=[-1, -3, -5, 4, 6767]

const psoi=(arr)=>{
    let p=0,n=0;
    arr.forEach(function(val){
        if(val>0){
            p++;
        }else{
            n++;
        }
    })
    return p>n ? "positivo":"negativo"
}
console.log(psoi(posi))




// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]


let h=[1,5,2,7,3,9,0,4,6,2,4,74,2,3,0]
let h2=[1,5,2,7,3,9,0,4,6,2,4,74,2,3,0,1]


function anti(arr){
    console.log(arr)
    let l=arr.length,l2,y1,y2,y3,y4;
    console.log(l)
    //l%2==0 ? l2=(l/2) : l2=
    if(l%2==0){
        l2=l/2;
        y1=arr.slice(0,l2)
        y2=arr.slice(l2,l)
    }else{
        l2=l/2;
        y1=arr.slice(0,l2)
        y2=arr.slice(l2+1,l)
    }
    console.log(y1)
    console.log(y2)
    y3=y2.reverse();
    console.log(y3)
    y4=y3;
    y1.forEach(function(va,ind){
        y4[ind]=va+y3[ind]
        //console.log(va+" - "+ind)
    })
    //console.log(y4)
    return y4
}

console.log(anti(h));
//console.log(anti(h2));



