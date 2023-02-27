

const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];


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
        //arr.splice(po,1,9e6);
        arr[po]=9e6
    }
    arr=arr3;
    //console.log(arr)
    return arr2
}
console.log("Metodo Seleccion")
console.log(arr2)
let mSel=selenu(arr2)
console.log("Menor: "+mSel[0]+"   Mayor: "+mSel[mSel.length-1])
console.log(arr2)


// fallo en arr2
