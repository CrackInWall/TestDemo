class Employee2 {
    eID:number
    eName:string
    depNum:number

    //constructor
    constructor(id:number, name:string, dno:number) {
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

let emp2 = new Employee2(3, "Z", 12)

emp2.display()