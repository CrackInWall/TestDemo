function display() {
    console.log("Welcome")
    
}

display()

function Sum(x:number, y:number) {
    return x+y
}

let res = Sum(12,5)
console.log(res)

//Anonymouns function
let greeting = function() {
    console.log("Welcome to Typescript")
}

greeting()

let Sum2 = function(a:number, b:number) {
    return a + b
}

console.log(Sum2(4,17))