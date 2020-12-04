class Employee {
    eID:number
    eName:string
    depNum:number


    //method
    setData(id:number, name:string, dno:number) {
        this.eID = id
        this.eName = name
        this.depNum = dno
    }

    display() {
        console.log(this.eID)
        console.log(this.eName)
        console.log(this.depNum)
    }
}

let emp = new Employee()


emp.eID = 154
emp.eName = "Z"
emp.depNum = 123456789

emp.setData(3, "Z", 12)


emp.display()