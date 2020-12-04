var Employee = /** @class */ (function () {
    function Employee() {
    }
    //method
    Employee.prototype.setData = function (id, name, dno) {
        this.eID = id;
        this.eName = name;
        this.depNum = dno;
    };
    Employee.prototype.display = function () {
        console.log(this.eID);
        console.log(this.eName);
        console.log(this.depNum);
    };
    return Employee;
}());
var emp = new Employee();
emp.eID = 154;
emp.eName = "Z";
emp.depNum = 123456789;
emp.setData(3, "Z", 12);
emp.display();
