const person = {
  first: 'anisha',
  last: 'moll',
  age: 100

}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'tom'
person.last = 'jerry'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)

const point = { x: 10, y: 50 }
console.log(point.x)
console.log(point.y)
const point2 = { x: point.x, y: point.y + 1 }
console.log(point2.x)
console.log(point2.y)
const book = {
  'main title': 'java script',
  'sub-title': 'guide to java script for beginners',
  for: 'students',

  author: {
    first: 'anisha',
    last: 'moll'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
//console.log(book.sub-title)
console.log(book.for)
