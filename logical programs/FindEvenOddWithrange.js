const Rec=(range,i)=>{
    if (i>range)
    return;

    if(i<=(range/2)&& i%2===0)
    console.log(i+" is even")

    if(i>(range/2)&& i%2!=0)
    console.log(i+" is odd")
Rec(range,i+1)
}

const EvenOddNatural=()=>{
let range=200;
Rec(range,1)
}
EvenOddNatural();