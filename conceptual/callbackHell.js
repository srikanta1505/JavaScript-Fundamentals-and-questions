const getData=(id,callback)=>{
    setTimeout(() => {
        console.log(id);
        if(callback)
        callback();
    }, 2000);
}
getData(9,()=>getData(6));