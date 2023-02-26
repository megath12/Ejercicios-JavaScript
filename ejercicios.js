
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
console.log("Numero de True: "+countTrue([true, false, false, true, false]))




//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

/* 
const multi=(num)=>{
    let k;
    if(num%2==0){
        k=2;
    }
    else if(num%3==0){
        k=3;
    }
    else if(num%5==0){
        k=5;
    }
    else if(num%7==0){
        k=7;
    }
    else{
        k=0;
    }
    return k;
}


/* function agre(nu,ve){
    if(v1=!0){
        a1.push(v1)
        n/=multi(n)
        console.log(n)
    }
}
 */
/*
function MCD(n1, n2){
    let n,m,v1,v2;
    let a1=[],a2=[];
    n=n1,m=n2;
    v1=multi(n);
    v2=multi(m)
    for(let f=0; f<10; f++){
        if(v1=!0){
            a1.push(v1)
            n/=multi(n)
            console.log(n)
        }
        if(v2=!0){
            a2.push(v2)
            m/=multi(m)
            console.log(m)
        } 
    }
    return a1+" "+a2
    
}

console.log("QUEEE "+ MCD(12,25))
 */



//Ejercicio 05
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion










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




// Encontrar el numero n de una figura piramidal triangular (tetrahedron)  triángulo de Sierpinski 
// (nivel) -> cantidad de numeritos, Número tetraédrico
// https://blogsaverroes.juntadeandalucia.es/recursosdematematicas/numeros-piramidales-triangulares-o-tetraedricos/

const tetra=(n)=>{
    let va;
    va=(1/6)*n*(n+1)*(n+2);
    return va;
}
console.log("Total: "+tetra(4))


const tetra2=(n)=>{
    let va=[];
    for(let k=1;k<=n;k++){
        va[k-1]=(1/6)*k*(k+1)*(k+2);
    }
    return va;
}
console.log("Total: "+tetra2(4))


// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%


const areaPais=(a)=>{
    let areaTierra=510.1e6*.292;
    let divArea=a/areaTierra*100;
    return divArea;
}

console.log(areaPais(17098242)+" % de area ocupada en la tierra")
console.log(areaPais(9372610)+" % de area ocupada en la tierra")


// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit


const cambio=(num)=>{
    let j=0**num
//  let j=Math.abs(-1+num)
    return j
}
console.log("te cambio a "+cambio(0))
console.log("te cambio a "+cambio(1))



// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

function bzz(num){
    switch (true) {
        case num==0:
            return "No hay nadie";
            break;
        case num==1:
            return "Usuario 1 en linea"
            break;
        case num==2:
            return "Usuario 1 y 2 en linea"
            break;    
        case num>2&&num<100:
            return num+" usuarios en linea"
        default:
            return "Numero invalido"
            break;
    }
}
console.log(bzz(0))
console.log(bzz(1))
console.log(bzz(2))
console.log(bzz(5))
console.log(bzz(-2))





