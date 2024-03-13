class AbstactionDemo{

        constructor(side){
            this.side=side
        }

        calculateArea(){
            throw new Error("Can not call this nethod directly")
        }
        getArea(){
            this.calculateArea();
        }
}
class Circle extends AbstactionDemo{
    
    calculateArea(){
        console.log(3.141*this.side*this.side);
    }
} 
class Square extends AbstactionDemo{

    calculateArea(){
        console.log(this.side*this.side);
    }
let obj=new AbstactionDemo("cd deluxe", 2005)
