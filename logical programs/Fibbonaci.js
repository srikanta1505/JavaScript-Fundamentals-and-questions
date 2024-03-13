var a=0,b=1,sum=0;
const fibbonaciRec=(range)=>{
 
if(range<0)
return ;

sum=a+b;
a=b;
b=sum;
console.log(sum)
fibbonaciRec(range-1)
}

const fibbonaci=()=>{

    let range=10;
    console.log(a);
    console.log(b);
    fibbonaciRec(range-2)

}

fibbonaci();