class BankAccount{
    customerName;
    accNumber=Date.now();
    balance=0;

    constructor(name,balance){
        this.customerName=name;
        this.balance=balance;
    }
    
    deposit(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }
}
    
    


const SrikantAcc= new BankAccount("Srikanta",5000);

// console.log(SrikantAcc.accNumber )
SrikantAcc.deposit(5000);
SrikantAcc.withdraw(2000);

console.log (SrikantAcc);
