class Person {
    name:string
    constructor(name:string) {
        this.name = name
    }
}

class Employee extends Person {
    empNo:number

    constructor(empNo:number, name:string) {
        super(name)
        this.empNo = empNo
        
    }
    
    displaydata() {
        console.log(this.name)
        console.log(this.empNo)
    }
}

let emp = new Employee(101, "Z")
emp.displaydata()