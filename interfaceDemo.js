var emp = {
    empName: "John",
    empId: 101,
    empSal: 10000,
    displayDate: function () {
        console.log(this.empName + " " + this.empId + " " + this.empSal);
    }
};
console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);
emp.displayDate();
