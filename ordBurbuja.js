
const arr = [1,2,3,4,5];
const arr2 = [1, -563, 999, 0 , -1, -999];


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
} 
//console.log(burme(arr2))
//console.log(burma(arr2))
*/
console.log("Metodo Burbuja")
console.log(arr2)
let mBur=burme(arr2);
console.log("Menor: "+mBur[0]+"   Mayor: "+mBur[mBur.length-1])
console.log(arr2)

