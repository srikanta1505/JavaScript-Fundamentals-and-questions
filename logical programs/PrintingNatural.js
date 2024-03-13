function Recusion(range,i){
    if(i>range)
    return;

    if(i%2===0)
    console.log(i+" is even");
    else 
    console.log(i+ " is odd");
    Recusion(range,i+1)
}

function NaturalNum(){
    let range=10;
    Recusion(range,1)
}

NaturalNum();
