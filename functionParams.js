function Greeting(greeting, name) {
    return greeting + "      " + name;
}
console.log(Greeting("Welcome", "John"));
console.log(Greeting("Welcome", "John"));
//Optional Parameters
function Greeting2(greeting, name) {
    return greeting + " " + name;
}
console.log(Greeting2("Welcome", "Bob"));
console.log(Greeting2("Welcome"));
//console.log(Greeting2("Welcome", "Bob", "Steven"))
//default parameters
function Greeting3(name, greeting) {
    if (greeting === void 0) { greeting = "Hello "; }
    return greeting + " " + name;
}
console.log(Greeting3("baby"));
console.log(Greeting3("John", "Welcome"));
