class Shape{
    constructor(color){
        this.color=color;
    }
    calculateArea(){
        throw new Error("can not call Directly");
    }
    displayArea(){
        console.log(this.color);
        this.calculateArea();
    }

}

class square extends Shape{
    constructor(color,side){
        super(color);
        this.side=side;
    }
    calculateArea(){
        console.log(this.side*this.side);
    }
}

let obj= new square("blue", 5);

obj.displayArea();