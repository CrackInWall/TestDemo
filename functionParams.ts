function Greeting(greeting:string, name:string):string {
    return greeting + "      " + name
}

console.log(Greeting("Welcome", "John"))
console.log(Greeting("Welcome", "John"))


//Optional Parameters

function Greeting2(greeting:string, name?:string):string {
    return greeting + " " + name;
}

console.log(Greeting2("Welcome", "Bob"))
console.log(Greeting2("Welcome"))
//console.log(Greeting2("Welcome", "Bob", "Steven"))

//default parameters

function Greeting3(name:string, greeting:string="Hello "):string {
    return greeting + " " + name;
}

console.log(Greeting3("baby"))
console.log(Greeting3("John", "Welcome"))

