class Bank {
    rateofInterest:number = 0

    roi():number {
        return this.rateofInterest
    }
}

class BankX extends Bank {

    roi():number { //overriding
        return 10.5
    }
}

class BankY extends Bank {

    roi():number {
        return 12.5
    }
}

let x = new BankX()
console.log(x.roi())

let y = new BankY()
console.log(y.roi())