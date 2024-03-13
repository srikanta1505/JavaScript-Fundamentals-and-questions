class Bank{
    roi(Bank){
        return ;
    }
}
class Axis extends Bank{
    roi(Bank){
         console.log(`This is ${Bank} And the ROI=10.0%`);
    }
}
class SBI extends Bank{
    roi(Bank){
        console.log(`This is ${Bank} And the ROI=7.25%`);
    }
}
let obj= new Axis();
obj.roi("Axis BAnk");