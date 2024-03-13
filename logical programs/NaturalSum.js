function NaturalnumRec(range,i,sum){
    // let sum=0;
        if(i>range)
        return sum;
        sum+=i;
        return NaturalnumRec(range,i+1,sum)
    }
    
    const NaturalNum=()=>{
        let range=10;
        let result=NaturalnumRec(range,1,0)
        console.log(result);
    }
    NaturalNum();