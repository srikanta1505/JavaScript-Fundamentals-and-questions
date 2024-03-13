class A{
    a=100;
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }

    getName(){
        console.log("Name:"+this.name)
    }
    setName(name){
        this.name=name
        console.log("Nmae updated to"+name)
    }
    getMarks(){
        console.log("Marks:"+this.marks)
    }
    setmarks(marks){
        this.marks=marks;
        return marks;
    }
}
let obj= new A("Srikanta",90);
obj.getMarks();
obj.getName();
obj.setName("chintu");
obj.setmarks(75);
obj.getMarks();
obj.getName();