const Rec=(num,i,count)=>{
    if (i>num)
    {
    return count;
    }
    if(num%i==0)
    count++
    
    return Rec(num,i+1,count)
    }
    
    function PrimeNumber(num){
    
    let count =Rec(num,1,0)
    if(count===2)
    console.log("prime ");
else 
console.log("not prime");
    }
    
    PrimeNumber(2);