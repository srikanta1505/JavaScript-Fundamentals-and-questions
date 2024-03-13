const StringOperation=()=>{
    let str="cuttuc"
    let rev="";
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str.charAt(i);
    }

    if(str===rev)
    {
        console.log("Palindrome");
    }
}
StringOperation();