//declaration
var employee1 = [101, "john", 5000];
console.log(employee1);
var employee2 = [404, "Z", 502];
console.log(employee2);
console.log("                      ");
//Accessing tuple
console.log(employee1[1]);
console.log(employee2[2]);
console.log("                      ");
//add element into tuple - puch()
var employee3 = [200, "Bob", 400];
console.log("before ", employee3);
employee3.push(102, "Scott", 700);
console.log("After ", employee3);
//Remove elements from tuple - pop()
employee3.pop();
console.log("After removing ", employee3);
//Update element in tuple
employee3[1] = "Marley";
console.log("After update ", employee3);
//Tuple array
var student;
student = [[102, "smith"], [103, "A"], [104, "b"]];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
