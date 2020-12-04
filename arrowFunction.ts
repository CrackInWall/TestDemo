let sum = (x:number, y:number):number => {
    return x+y
}

console.log(sum(20,30))

let Print=() => {
    console.log("Welcome")
}

let Print2=() => console.log("Welcome again")
Print2()

//Overload function

function add(a:number, b:number):number
function add(a:string, b:string):string

function add(a:any, b:any):any {
    return a + b
}

console.log(add(100,200))
console.log(add("Welcome ", "John"))

function display(a:string, b:string):void {
    console.log(a+b)
}

//Rest parameters

function Greet(greetingmsg:string, ...name:string[]) {
    return greetingmsg + " " + name
}

console.log(Greet("hello", "john", "Jeff", "Barny", "Greg"))
