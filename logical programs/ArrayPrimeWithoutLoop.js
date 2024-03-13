function isPrime(number,divisor=2){
    if(number<=1)
    {
        console.log(number+ "is not Prime");
        return;
    }

    if(number===2)
    {
        console.log(number +" is prime");
        return;
    }
    
    if(number%divisor===0){
        console.log(number +"  is not prime");
        return;  
    }
    

    if(divisor*divisor>number)
    {
        console.log(number +" is prime");
        return;
    }
    return isPrime(number,divisor+1)

}
const Arrayprime=(arr,i)=>{
    if(i>=arr.length)
    return;
    let number=arr[i]
    isPrime(number);
    Arrayprime(arr,i+1)


}

let arr=[2,8,98,17,7]
Arrayprime(arr,0);