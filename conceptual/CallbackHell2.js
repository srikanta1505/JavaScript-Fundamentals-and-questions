function sum(a,b,callback){
    let sum=a+b;
    console.log("sum:",sum);
    if(callback)
    callback()
}

sum(9,48,()=>sum(5,10))