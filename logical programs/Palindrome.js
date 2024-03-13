function PalindromeRec(num,rev){
    
    if(num===0)
    return rev ;

    let rem=num%10;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);
     
    return PalindromeRec(num,rev)
}

const palindrome=()=>
{
    let num=232,Newnum=num;
    
    let rev =PalindromeRec(num,0)
    
    if (Newnum===rev)
    console.log("Palindrome");
    else 
    console.log("not");
}
palindrome();


