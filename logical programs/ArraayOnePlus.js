const arrRec=(arr,i)=>
{
    
    if(i>=arr.length)
    return arr;
    arr[i]=arr[i]+1;
    return arrRec(arr,i+1)

}
const Arrayoperation=()=>
{
    let arr=[5,9,6,23,14,27];
    let newArr=(arrRec(arr, 0))
    console.log(newArr)
}
Arrayoperation();