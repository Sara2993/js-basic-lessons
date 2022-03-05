// eslint-disable-next-line camelcase
const my_name = 'namefieldEmpty'
const middle = 'gabbar'
const last = 'singh'

console.log(my_name)
console.log(middle)
console.log(last)
const sentence1 = 'shes\'s so "cool"'
console.log(sentence1)
const sentence2 = 'shes\'s so "cool"'
console.log(sentence2)
const sentence3 = "shes's so \"cool\""
console.log(sentence3)
const sentence4 = '\'shes\'s so cool\''
console.log(sentence4)

const song1 = `i like
 ARR songs and
 Aniruth songs`
console.log(song1)

// eslint-disable-next-line camelcase
const hello4 = `hello my name is ${my_name}. nice to meet you. i am ${1 + 100} years old`
console.log(hello4)
const html = `<div>
<h2>$ {my_name}</h2>
<p>$ {hello}</p>
</div>
`
console.log(html)
document.body.innerHTML = html

// boolean

// eslint-disable-next-line no-unused-vars
const isdrawing = false
const age = 18
const ofage = age > 19
console.log(ofage)
