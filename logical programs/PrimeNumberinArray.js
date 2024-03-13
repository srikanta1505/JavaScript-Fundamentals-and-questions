function Recusion(arr,i){
    if (i>arr.length-1)
    {
        return;
    }
    let count=0
    for(let j=1;j<=arr[i];j++)
    {
        if(arr[i]%j===0)
        count++;

    }
    if (count===2)
    {
        console.log(arr[i]+ "is prime number");
    }
    else 
    console.log(arr[i]+ "is prime not number");
    Recusion(arr,i+1)


}
const ArrayPrime=()=>{
    let arr=[2,8,7,98,65,67];
    Recusion(arr,0)
}
ArrayPrime();