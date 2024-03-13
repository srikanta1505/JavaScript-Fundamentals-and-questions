class ShirtCollection{
    constructor(color){
        this.color=color;
    }

    shirtColor(){
        console.log("this shirt colour  is :"+this.color)
    }

}
class Black extends ShirtCollection{
    constructor(color,brand){
        super(color);
        this.brand=brand;

    }
    shirtBrand(){
        console.log("This shirt is from "+this.brand)
    }

    AllInfo(){
        this.shirtBrand();
        this.shirtColor()
    }




}

let obj=new Black("green","Puma");
obj.AllInfo();
obj.shirtColor();

