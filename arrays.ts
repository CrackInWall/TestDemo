//single dimentional

let fruits1:string[] = ["apple", "mango", "banana"]

let fruits2:Array<string>;
fruits2 = ["apple", "mango", "banana", "grape"]

console.log(fruits1)
console.log(fruits2)



let values1:(string | number)[] = ["apple", 100, "orange", 10]

let values2:Array <string | number> = ["mango", 200, 11, "patatoe"]

console.log(values1)
console.log(values2)

console.log(fruits1[0])
console.log(fruits1[2])
console.log(fruits1[1])
console.log(fruits1[3])

for(let i = 0; i<=3;i++) {
    console.log(fruits2[i])
}
console.log("/////////////////////////")
for (let j in fruits2) {
    console.log(fruits2[j])
}

//two dimentional

let myArray1:number[][] = [[10,20], [30,40], [50,60]]
console.log(myArray1)

let myArray2:(string | number)[][] = [[1, 'banana'], [2, 'apple'], [3,'grape']]
console.log(myArray2)
console.log(myArray2[0][0])
console.log(myArray2[0][1])
console.log(myArray2[1][0])
console.log(myArray2[1][1])

console.log("reading date using loop")

for(let i = 0; i<myArray2.length; i++) {
    for(let j = 0; j<myArray2[i].length; j++) {
        console.log(myArray2[i][j])
    }
}

console.log("                       ")
console.log("reading date using loop")
console.log("                       ")
for(let k in myArray2) {
    for(let l in myArray2[k]) {
        console.log(myArray2[k][l])
    }
}