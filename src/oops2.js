/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
const book = {
  'main title': 'JavaScript',
  subtitle: 'The Definitive Guide',
  for: 'all audiences',
  author: {
    firstname: 'Donald',
    surname: 'Duck'
  }
}
let len
//  book=null;
// if(book){
// if(book.subtitles){
//  len=book.subtitle.length;
//  console.log(len);
//  }
// else
//  console.log("book.subtitle undefined:");
// }
// else
//  console.log("book is null");

len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)
console.log(book.author)
delete book.author
console.log(book.author)
console.log(book['main title'])
delete book['main title']
console.log(book['main title'])
let o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString
console.log(o6.toString)
// no delete objects
delete Object.prototype
let a = 1
delete this.a
function f1 () {}
delete this.f1()

const myNumber = new Number(23)
const myString = new String('male')
const myBoolean = new Boolean(false)
const myObject = new Object()
const myArray = new Array('foo', 'bar')
const myFunction = new Function('x', 'y', 'return x*y')
const myDate = new Date()
const myRegExp = new RegExp('\bt[a-z]+\b')
const myError = new Error('Sorry')

console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myBoolean.constructor)
console.log(myObject.constructor)
console.log(myArray.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
console.log(myRegExp.constructor)
console.log(myError.constructor)
