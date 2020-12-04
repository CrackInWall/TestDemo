var Employee2 = /** @class */ (function () {
    //constructor
    function Employee2(id, name, dno) {
        this.eID = id;
        this.eName = name;
        this.depNum = dno;
    }
    Employee2.prototype.display = function () {
        console.log(this.eID);
        console.log(this.eName);
        console.log(this.depNum);
    };
    return Employee2;
}());
var emp2 = new Employee2(3, "Z", 12);
// emp.eID = 154
// emp.eName = "Z"
// emp.depNum = 123456789
//emp.setData(3, "Z", 12)
emp2.display();
