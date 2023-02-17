
let f;

function cuadrado(n){
    return n*n
}
console.log(cuadrado(9))



// Convertir de F a C

function calcCelcius(fahr) {
    let celc = (fahr -32) * 5 / 9;
    return celc;
}

console.log(calcCelcius(100));


// Encontrar puntos totales en un juego de basketball 
// Hay valores de 2 puntos por canasta y 3 por canasta  // 
const canasta=(tres,dos) => tres*3+dos*2 ;
let e1="Los puntos totales son: "
console.log(e1+canasta(8,42))


// Encontrar cuantas patas de animales hay en total 
// gallinas = 2 // vacas = 4 // cabras = 4  
const patas=(ga,va,ca)=>ga*2+va*4+ca*4;
let e2="La cantidad de patas son: "
console.log(e2+patas(2,5,7))


// Encontrar cantidad de FPS dados minutos  
//1seg = 60 fps
const efeps=(num)=>num*60;
let e3="Los FPS son: "
console.log(e3+efeps(5))


// escribir una funcion que acepte un angulo en radianes y retorne un angulo en grados
const grados=(rad)=>rad*180/3.141592;
let e4="Los grados son: "
console.log(e4+grados(3.141592))


// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408
// pi=3248  pf=5408   t=3dec  nat=6
//const poblacion =(datoActual)=> datoActual*Math.pow((1+ 0.18516),3);  MAAAALLLLLLLLL

/* const calculatePopulation = (initialPopulation, growthRate) => {
    const growthFactor = 1 + (growthRate / 100);
    const populationIn30Years = initialPopulation * growthFactor ** 3;
    return Math.round(populationIn30Years);
  };
  
 */
// Encontrar la poblacion de la tierra en 3 decadas a partir de cantidad de personas
// poblacion(3248, 6) -> 5408
// pi=3248  pf=5408   t=3dec  nat=6
let e5;
e5=Math.pow((5408/3248),1/30)-1;
console.log("La tasa de creciemiento es: "+e5)
//console.log(Math.pow(1+0.01714,30)*3248)


// Conviertan un Array de caracteres en String
// ['z','a','b','d','i','e','l'] -> 'Zabdiel'
let nombre=['z','a','b','d','i','e','l'];

const cambios=(name)=>{
    let p="";
    for(var k1=0; k1<name.length; k1++){
        p+=name[k1];
    }
    return p
}
console.log(cambios(nombre))

// Conviertan un Array de caracteres en String
// ['z','a','b','d','i','e','l'] -> 'Zabdiel'

const arr2str=(letras)=>{
    return letras.join('');
}
console.log(arr2str(nombre))



// true circunferencia del circulo es mayor al perimetro del cuadrado
const mayyor=(radio,area)=>{
    let circ =2*3.1416*radio;
    let rad= Math.sqrt(area,2)*4
    return (circ > rad) ? true :false;
}
console.log(mayyor(5,25))


//enegía cinetica
// ke=(1/2)mV^2

const enrCin=(m,V)=>{
    return (1/2)*m*V**2
}
console.log("La enegia cnetica es ")

console.log(enrCin(60,3))
console.log(enrCin(45,10))
console.log(enrCin(63.5,7.35))



