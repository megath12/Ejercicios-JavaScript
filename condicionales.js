
// SABER SI UN NUMERO ES PAR O IMPAR

const decn=(num)=>{
    if(num%2==0){
        return "Es par"
    }
    else{
        return "Es impar"
    }
}
console.log(decn(8))



const decn2=(num)=>{
    return num%2==0 ? true:false;
}
console.log(decn2(4))



const decn3=(num)=>{
    let t="impar";
    if(num%2==0){
        t="par";
    }
    return t;
}
console.log(decn3(4))




// SABER SI ES MAYOR O MENOR DE EDAD

const mayor=(year)=>{
    let y;
    y=new Date().getFullYear()-year;
    return y>=18 ? "Mayor": "Menor";
}
console.log(mayor(2009))



// SWITCH para varias opciones
const valor=32;

function elegir(n){
    let lu;
    switch(n){
        case 5:
            lu="entre cero y cinco";
            break
        case 2:
            lu="entre cinco y diez";
            break
        default:
            lu="estas mal morro"
            break;
    }
    return lu;
}
console.log(elegir(5))


// RETO 3

function businessHours(){
    let m="No es horario laborable"
    let hl=new Date().getHours()
    //console.log(hl)
    if(hl>=9&&hl<18){
        m="Es horario laborable"
    }
    return m;
}
console.log(businessHours())


const businessHours2=(hour)=>{
    return hour>=9 && hour<18 ? "Horario laborable":"Horario no laborable";
}
console.log(businessHours2(15))




function businessDay(){
    let m="No es día laborable"
    let hl=new Date().getDay()
    //console.log(hl)
    if(hl>=1&&hl<6){
        m="Es día laborable"
    }
    return m;
}
console.log(businessDay())


const businessDay2=(day)=>{
    return day>=1 && day<6 ? "Día laborable":"Día no laborable";
}
console.log(businessDay2(6))



function business(){
    let m="No es día laborable, "
    let n="No es horario laborable"
    let dl=new Date().getDay()
    let hl=new Date().getHours()
    if(dl>=1&&dl<6){
        m="Es día laborable, "
    }
    if(hl>=9&&hl<18){
        n="Es horario laborable"
    }
    return m+n;
}
console.log(business())



function business2(dl,hl){
    let m="No es día laborable, "
    let n="No es horario laborable"
    if(dl>=1&&dl<6){
        m="Es día laborable, "
    }
    if(hl>=9&&hl<18){
        n="Es horario laborable"
    }
    return m+n;
}
console.log(business2(6,15))


//Ejercicio 04

// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion

function countTrue(valores){
    let c=0;
    for (let k=0; k<valores.length; k++){
        if(valores[k]==true){
            c++
        }
    }
    return c
}
console.log(countTrue([true, false, false, true, false]))




//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion







// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 

function fibo(n){
    let vp=0, va=1,vt;
    vt=vp+va;

}





