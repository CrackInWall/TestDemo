var sum = function (x, y) {
    return x + y;
};
console.log(sum(20, 30));
var Print = function () {
    console.log("Welcome");
};
var Print2 = function () { return console.log("Welcome again"); };
Print2();
function add(a, b) {
    return a + b;
}
console.log(add(100, 200));
console.log(add("Welcome ", "John"));
function display(a, b) {
    console.log(a + b);
}
//Rest parameters
function Greet(greetingmsg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return greetingmsg + " " + name;
}
console.log(Greet("hello", "john", "Jeff", "Barny", "Greg"));
