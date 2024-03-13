class A{
    a= 2000;
    show(value){
        console.log(`parent this is ${value}`)
    }
}

class B extends A{
    b=5000
    display(value){
        console.log(` child this is ${value}`)
    }
}

let obj=new B();
console.log(obj.b);
console.log(obj.a);
obj.show(98);
obj.display(9008);
