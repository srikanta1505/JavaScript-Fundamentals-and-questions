class A{
    a=100
    display()
    {
        console.log(this.a);
    }
}

class B extends A{
    b=200;
    show(){
        console.log(this.b);
    }
}

let obj= new B();
obj.show();
obj.display();