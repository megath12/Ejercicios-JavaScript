
const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];


let insrme=(arr)=>{
    let a,b;
    for (let i = 1; i < arr.length; i++) {
        for(let c=i;c>0;c--){
            a=arr[c-1]
            b=arr[c]
            if (b<a) {
                arr[c]=a;
                arr[c-1]=b;
            }
        }
    }
    return arr
}
console.log("Metodo Insercion")
console.log(arr2)
let inser=insrme(arr2)
console.log("El num.menor es: "+inser[0]+" el numero mayor es: "+inser[inser.length-1])
console.log(insrme(arr2))



