interface I1 {
    a:number
    b:number
    sum():number
}

interface I2 extends I1 {
    x:number
    y:number
    sub():number
}

class C1 implements I2 {
    a:number
    b:number
    x:number
    y:number

    constructor(){}

    sum():number {
        return (this.a + this.b)
    }

    sub():number {
        return (this.x - this.y)
    }

}

let c = new C1()

c.a = 10
c.b = 5
c.x = 12
c.y = 3

console.log(c.sum())
console.log(c.sub())