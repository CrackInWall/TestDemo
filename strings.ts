let st:string = "welcome to ts practice"
let st2:string = " go away"

console.log(st.charAt(0))
console.log(st.concat(st2))
console.log(st2.replace('g', 't'))
console.log(st2.replace('away', 'the top'))

let st3:string="banana,apple,pineapple"
console.log(st3.split(','))

console.log(st2.substring(1,5))

console.log(st3.toUpperCase())
console.log(st3.toLowerCase())

let st4:string= "   welcome   "
console.log(st4)
console.log(st4.trim())
