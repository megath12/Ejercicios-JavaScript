
const aM=[[2,0],[3,7]]

//const matriX=Math.
const matrix3 = [[-1,0,7],[1,5,4],[3,-6,0]]

let numberArr = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
  ];


let sum = 0;

numberArr.forEach(row => {
    row.forEach(element => {
        sum += element;
    })
})

console.log(sum);
