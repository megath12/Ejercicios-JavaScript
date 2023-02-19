
// RETO 3
// Sistema de  calendario para verificar siel dia actual, junto a la hora es coniderada dia y horario laboral estandar

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
console.log("Numer de True: "+countTrue([true, false, false, true, false]))




//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function MCD(n1, n2){
    let k;

}






// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion 

function fibo(n){
    let vi=0, vf=1, vt;
    for(let j=1;j<=n;j++){
        vt=vi+vf;
        console.log(vt)
        vi=vf;
        vf=vt;
    }
}
fibo(10)




// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos






// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%






// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit







// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"







