function display() {
    console.log("Welcome");
}
display();
function Sum(x, y) {
    return x + y;
}
var res = Sum(12, 5);
console.log(res);
//Anonymouns function
var greeting = function () {
    console.log("Welcome to Typescript");
};
greeting();
var Sum2 = function (a, b) {
    return a + b;
};
console.log(Sum2(4, 17));
