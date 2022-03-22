class pizza {
    //constructor
    constructor(toppings =[],customer) {
        this.toppings=toppings;
        this.toppings=customer;

    }
    eat(){
        console.log(this.topping);
        console.log(this.customer);

    }

}
const mylunch=new pizza(['onion','mushroom','capsicum'],'anisha');
//console.log(mylunch);
mylunch.eat();
mylunch.toppings['carrot','almonds','lobster']
console.log(mylunch.toppings);
