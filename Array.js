//Array - It can store many values under a single variable.

//1. Declaration of Array
const students = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 

//2.Accessing Array Element
const student = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
let index = student.indexOf('Prajakta')
console.log(index);

//3.Length of Array
const student1 = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
let index1 = student.length
console.log(index1);

//4.Adding Element into Array Using Push
const student2 = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
student2.push('Rahul')
console.log(student2);

//5.Delete Element into Array Using Pop
const student3 = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
student2.pop('Rahul')
console.log(student2);

//6.Remove First Element using Array.shift
const student4 = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
student4.shift()
console.log(student4);

//7.Add Element at beginning using Array.unshift
const student5 = ['Sayali', 'Prajakta', 3, true, 'Om', 7] 
student5.unshift('Komal')
console.log(student5);

//8.Array.foreach() function
function demo(){
    const item = [2,5,7,8,4];
    const Add = [];

    item.forEach(function (item) {
        Add.push(item * 3);
    });
    console.log(Add);
}
demo();

//9.Array.filter() function
const num = [12,66,43,87,23]

function BigEle(no) {
    return no > 25;
}
function Big() {
    var filtered = num.filter(BigEle);
    console.log(filtered);
}
Big();

//10.Array.map
var result = [3, 6, 77, 32, 56];
var data = result.map(function(num){
    return num/2;
});
console.log(data);

//11.Splice()
var result1 = [3, 6, 77, 32, 56];
result1.splice(1, 3, 'Shubham','Pratibha')
console.log(result1);

//12.Slice()
var number = [3, 6, 77, 32, 56];
let result2 = number.slice(1,3);
console.log(result2);