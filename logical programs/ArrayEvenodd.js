function EvenoddRec(arr,i){
if (i>arr.length-1)
return ;
if (arr[i]%2==0)
console.log(arr[i]+ " is even");
else 
console.log(arr[i]+ " is odd");
EvenoddRec(arr,i+1)
}

const ArrayevenOdd=()=>{
    let arr=[2,90,17,84,3,98,79,35]

    EvenoddRec(arr,0)
}
ArrayevenOdd();