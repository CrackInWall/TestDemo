"use strict";
exports.__esModule = true;
exports.myClass = exports.myFunc = exports.x = void 0;
exports.x = "welcome";
function myFunc() {
    console.log("This is my function");
}
exports.myFunc = myFunc;
var myClass = /** @class */ (function () {
    function myClass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myClass;
}());
exports.myClass = myClass;
