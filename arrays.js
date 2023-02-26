
const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];



// Encontrar el numero mas grande
// Encontrar el numero mas pequeño
// Encontrar el numero mas grande y el mas pequeño
// -> [10, -9];


//  --------------------------Ordenamiento por Burbuja-------------------------------------

const burme=(a)=>{
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-1 ; j++){
            let c=a[j],d=a[j+1];
            if(c>d){
                a[j]=d;
                a[j+1]=c;    
            }
        }
    }
    return a
}
/* 
const burma=(a)=>{
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length-1 ; j++){
            let c=a[j],d=a[j+1];
            if(c<d){
                a[j]=d;
                a[j+1]=c;    
            }
        }
    }
    return a
}

const burnum=(a)=>{
    let i,j,k=[];
    i=burme(a)
    //j=burma(a)
    k[0]=i[0];
    k[1]=i[i.length-1];
    return k
} */
//console.log(burme(arr2))
//console.log(burma(arr2))

console.log("Metodo Burbuja")
let mBur=burme(arr2);

console.log("Menor: "+mBur[0]+"   Mayor: "+mBur[mBur.length-1])
console.log(arr2)




//----------------------------Ordenamiento por Seleccion-------------------------------------

const selenu=(arr)=>{
    let arr3=arr;
    let arr2=[];
    for(let i=0; i<arr.length ; i++){
        let vm,a=arr[0],valor,a1;
        for (let i = 1; i < arr.length; i++) {
            let b = arr[i];
            if (a>b) {
                a=b;
            }
        }
        arr2.push(a);
        let po=arr.indexOf(a);
        arr.splice(po,1,9e6);
    }
    arr=arr3;
    return arr2
}
console.log("Metodo Seleccion")
let mSel=selenu(arr2)
console.log("Menor: "+mSel[0]+"   Mayor: "+mSel[mSel.length-1])
console.log(arr2)




// ------------------------------Ordenamiento por Inserción------------------------------------

let insrme=(arr)=>{
    console.log(arr)
    let a,b;
    for (let i = 1; i < arr.length; i++) {
        for(let c=i;c>0;c--){
            a=arr[i-1];
            b=arr[i]
            if (b<a) {
                arr[i-1]=b;
                arr[i]=a;
            }
            console.log(arr)
        }
    }
    return arr
}
console.log("Metodo Insercion")
console.log(insrme(arr2))





// -------------------------------Ordenamiento rapido------------------------------------------
















/*
const findBiggest = (arr) => {
    let counter = 0;
    let biggest = arr[counter];

    while(counter < arr.length){
        
        if(biggest < arr[counter]) {
            biggest = arr[counter];
        }

        counter++;
    }
    return biggest;
}

console.log(findBiggest(numArr));


const findSmallest = (arr) => {
    let counter = 0;
    let smallest = arr[counter];

    do {
        if(smallest > arr[counter]) {
            smallest = arr[counter];
        }
        counter++;
    } while(counter < arr.length)


    return smallest;
}

console.log(findSmallest(numArr));

*/



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


