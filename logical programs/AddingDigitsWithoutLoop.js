const Recursion=(num)=>
{
    let rem=0
    if (num<=0)
    {
        return rem;
    }
    rem=num%10;
    return rem+Recursion(Math.floor(num/10));
}
const AddingDigits=()=>{
    let num=234;
    console.log(Recursion(num));
}
AddingDigits();
