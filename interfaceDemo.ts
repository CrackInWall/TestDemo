interface IEmployee {

    empName:string
    empId:number
    empSal:number

    displayDate:()=>void

}

let emp:IEmployee = {
    empName:"John",
    empId:101,
    empSal:10000,
    
    displayDate():void{
        console.log(this.empName + " " + this.empId + " " + this.empSal)
    }
}

console.log(emp.empName)
console.log(emp.empId)
console.log(emp.empSal)
emp.displayDate()