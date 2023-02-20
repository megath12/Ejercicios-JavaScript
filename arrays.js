
const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];



// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];
function mae(nume){
    let g
    g=nume.sort
}



// Encontrar la suma de todos los resistores conectados en serie
// sumResistance([1, 5, 6, 3]) -> "15 ohms"
// sumResitance([14,3.5,6]) -> "25.5 ohms"
// Ohms >= 1
function suma(num){
    let k=0;
    for (let i=0;i<num.length;i++){
        k+=num[i];
    }
    return k;
}

console.log(suma(arr))



// Dado un numero, regresar el mismo numero divido en sus mitades dentro de un array
// numDiv(4) -> [2, 2];
// nuvDiv(10) -> [5, 5];
// numDiv(100) -> [50,50];

const dvis=(num)=>{
    let k,a=[];
    k=num/2;
    for(let i=0; i<2; i++){
        a.push(k)
    }
    return a
}

console.log(dvis(45))
