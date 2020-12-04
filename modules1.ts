export let x:string = "welcome"

export function myFunc():void {
    console.log("This is my function")
}

export class myClass {
    a:number
    b:number

    constructor(a:number, b:number) {
        this.a = a
        this.b = b

    }

    add = () => {
        return(this.a + this.b)
    }
}