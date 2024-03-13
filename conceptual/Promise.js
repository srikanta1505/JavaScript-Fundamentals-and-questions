const Age=new Promise((resolve, reject) => {
    let age=10;
    if(age>18)
    resolve("You are 18+")
    else
    reject("minor")
    
});
Age.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("Program executio complete"))