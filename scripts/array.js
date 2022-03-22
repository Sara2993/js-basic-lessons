//array
const names=['jhon','sam','peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length-1]);
names.push('suresh');
console.log('after push:' + names);
//.is calles as the spread operator
//it represents the entire items in the array
const names2=[...names,'raj'];
console.log('names2:' + names2);
//does names2 contain suresh
names.unshift('poppy');
console.log('unshift:' + names);
//it adds data to the beginning
//so the index no of the res of the values will change now
const names3=['raj', ...names];
console.log(names3);
//this will add data at the beginning
//now next method slice()
//create a new array
const bikes=['binachi','miele','panasonic','miyats','re'];
const b1=[...bikes.slice(0,2)];
console.log(b1);
//slice takes 2 parameters
//from ,to//it has copied 2 values from index 0 and assigned to b1
const b2=[...bikes.slice(3)];
console.log(b2);//from 3rd index
const newbikes=[
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)  
];
console.log('newbikes:' + newbikes);
//a new array called newbikes is created
//then in index 0 and 1 values are copied,
//in the 2nd index value 'benoto' is pushed,
//then from the 3rd index again values from bikes is copied using 
//slice (2) -the values  from the 2 index of bikes are added
const newbike=['binachi','miele','panasonic','miyats','re'];
const b3=[...bikes.slice(0,2)];
console.log(b2);
const newbikes2=[
    ...newbikes.slice(0,2),
    ...newbikes.slice(4)
];
console.log('newbikes2:' + newbikes2);
const indexofsam=names.findIndex(names=>names ==='sam');
console.log('indexofsam:' +indexofsam);
//write a function todelete a name from the array

//function deleteName(name){
    //const indexOfSam1=names.findIndex(names=>names===name);
    //const nam=[...names.slice(0,indexOfSam1),...names.slice(indexOfSam1+1)];
    //console.log(nam);
//}
//deleteName('Peter');
function deletename(nametodelete,names){
    const indexofname=names.findIndex(n=>n=== nametodelete);
    console.log('indexof name to delete:'+ indexofname);
    const newArray=[
        ...names.slice(0,indexofname),
        ...names.slice(indexofname+1)
    ];
    return newArray;
};
const deletenames=deletename('jhon',names);
console.log(deletenames);
console.log(names);
const numbers=[1,2,3,4,5,6,7,8,9];
console.log(numbers);
//(method) array<number>.splice(start:number,deletecount?:number)
//mutation method -modifies/deletes the value in the source array
//numbers.splice(3,2);//from the 3rd index delete the next 2 values
//the value in numbers are modified/deleted
//console.log(numbers);
const pizzaslice=numbers.slice(2,4);//satrt and end index
//(method) array<number>.slice(start:number,end?:number)
//immutable method-does not change the source array
console.log('pizzaslices:'+pizzaslice);
console.log('original numbers:' +numbers);
//both are numbers.splice(x,y);only so
const number=[1,2,3,4,5,6,7,8,9];
//anytime you want to use a mutattion method and not mutate the original array
//we need to take a copy of the array
number.reverse();
console.log(number);
const numberreversed=[...number].reverse();
console.log(numberreversed);

