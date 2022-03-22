function car(){
    let milesdriven=0;
    let speed=0;
    this.accelerate=(velocity,distance)=>{
        speed+=velocity;
        milesdriven+=distance;
    }
    this.getmilesdriven=()=>milesdriven;
    this.getspeed=()=>speed;
}
const testcarmodule=new car();
console.log('miles:'+testcarmodule.getmilesdriven());
console.log('speed'+testcarmodule.getspeed());
testcarmodule.speed=100;
testcarmodule.milesdriven=10;
console.log('miles:'+testcarmodule.getmilesdriven());
console.log('speed'+testcarmodule.getspeed());
testcarmodule.accelerate(4,10);
console.log('miles:'+testcarmodule.getmilesdriven());
console.log('speed'+testcarmodule.getspeed());

