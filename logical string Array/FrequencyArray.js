const FrequencyArray=()=>
{
    let arr=[6,6,2,5,2,6];
    

    for(let i=0;i<arr.length;i++)
    {
        let count=1;
        for (let j=i+1;j<arr.length;j++)
        {
            if((arr[i]===arr[j]))
            {
                count ++;
                arr[j]=-1;
            }
        }
        if(arr[i]!==-1)
        console.log(arr[i]+" : "+count);
    }
}
FrequencyArray();