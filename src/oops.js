/* eslint-disable no-undef */
function getchild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}
const o4 = { x: 'dont change thgis value' }
// console.log(o4.x)
// eslint-disable-next-line no-unused-vars
const p = getchild(o4)
// console.log(p)
/* o4 = null
p = getchild(o4) // object.create(null);
console.log(p) */
Object.prototype = 0// zero
// console.log(Object)
const o5 = {}
// console.log(o5)
o5.x = 100
// console.log(o5)
// eslint-disable-next-line no-const-assign
p = getchild(o5)
// console.log(p)
p.y = 200
// eslint-disable-next-line prefer-const
let q = getchild(p)
q.z = 300
// console.log(q)
console.log('q.x + q.y + q.z' + (q.x + q.y + q.z))
console.log('p.x + p.y' + (p.x + p.y))
console.log('o5.x + o5.z' + (o5.x + o5.y))
