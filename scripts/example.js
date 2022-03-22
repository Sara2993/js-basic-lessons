function  dosometask() {
    const x=100;
    const y=20;
    console.log('x:'+x+'y'+y);
}
dosometask();
console.log('completed');
function outer() {
    const outervar='hey i am the outer var!';
   // console.log(outervar);
    function inner() {
    const innervar='hey i am the inner var!';
    console.log(innervar);
    console.log(outervar);
    }
   // console.log(innervar);Uncaught ReferenceError: innerVar is not defined
  // inner();call to inner() from outer()
    return inner;
}
//outer();
//outer.inner();
const innerfunc=outer();
innerfunc();
//innerfunc=null;
function creategreeting(greeting='') {
 const mygreet=greeting.toUpperCase();
 return function(name){
     return `${mygreet} ${name}`;
 }
}
//const example =creategreetings('hello');
//console.log(example('saraswathi'));
const sayhello=creategreeting('hello');
const sayvanakam=creategreeting('vanakam');
console.log(sayhello('anisha'));
console.log(sayvanakam('priya'));
console.log(sayvanakam('anisha'));
function creatGame(gamename) {
    let score=0;
    return function win(){
        score++;
        return `your name ${gamename} score is ${score}`;
    }
}
const hockyGame= creatGame('hocky');
const soccerGame= creatGame('soccer');
hockyGame();
hockyGame();
hockyGame();
soccerGame();




