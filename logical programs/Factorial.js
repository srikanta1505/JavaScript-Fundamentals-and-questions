const FactorialRec=(num)=>
{
    let fact=1;
    if (num===1||num===0)
    return 1;
return fact=num*FactorialRec(num-1);

}

const Factorial=()=>{
    let num=5;
let result=FactorialRec(5);
console.log(result);
}
Factorial();