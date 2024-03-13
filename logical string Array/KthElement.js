const KthElement=()=>{
    const index=prompt("Enter the position");
    const arr=[3,7,9,2,98,45,23]
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    console.log(arr)
    console.log("The element is:"+arr[index+1]);
}
KthElement();