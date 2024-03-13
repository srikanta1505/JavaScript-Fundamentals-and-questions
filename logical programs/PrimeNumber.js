const PrimeRec=(num,i,count)=>
{
    
    if(i>num)
    return count;

    if(num%i===0)
    {
    count++
    }
    return PrimeRec(num,i+1,count);
}



const PrimeNumber=()=>{
    let num=37;
    let count=0;
count=PrimeRec(num,1,count)

if(count===2)
console.log("prime number");
else 
console.log("not a Prime number");
}

PrimeNumber();
