function BankAccount(name,balance=0){
    this.customerName=name;
    this.accNumber=Date.now();
    this.balance=balance
}
    BankAccount.prototype.deposit=function(amount){
        this.balance+=amount;
    }

    BankAccount.prototype.withdraw=function(amount){
        this.balance-=amount;
    }
    


const SrikantAcc= new BankAccount("Srikanta",5000);

// console.log(SrikantAcc.accNumber )
SrikantAcc.deposit(5000);
SrikantAcc.withdraw(2000);

console.log (SrikantAcc);


// // Account Creation
// const accounts=[];
// const customerName= document.getElementById("customername");
// const balance=document.getElementById("balance");
// const accountCreation =document.getElementById("accountCreation");

// accountCreation.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const account=new BankAccount(customerName.value,balance.value)
//     accounts.push(account);
//     console.log(accounts);
    
// })

// // deposit

// const addAmount=document.getElementById("addAmount");
// const WithdrawAmount=document.getElementById("WithdrawAmount");
// const deposit=document.getElementById("deposit");
// const Withdraw=document.getElementById("withdraw");

// deposit.addEventListener('submit',(e)=>{
//     e.preventDefault();
    
// })

