// // function showMessage (){
// //    // body

// //    window.alert("welcome user");
// // }

// // showMessage();

// // function sum(x , y , z){
// // alert(x + y+z);
// // }

// // // sum(10 , 20);

// // // sum(55,40);

// // // sum(77,100);

// // // sum("merit","magdy");

// // var x =10;
// // var y =20;

// // function calc(x,y){

// //     var z = x*y;
// //     return z;
// // }

// // var result = calc(x,y);//2000

// // console.log(result);

// // // var test = calc(x,y) * 900;

// // // console.log(test);

// // // function getSalary(x){

// // //    // return (x+900)*.5;

// // //     //alert(x);

// // // }

// // // var finalSalary = getSalary(8000);  //value

// // // alert(getSalary(5));

// // // var x= getSalary(5000);

// // // console.log(finalSalary);

// // // console.log(name);

// // // var name ="ahmed";

// // // var name; //declarartion
// // // name="ahmed" //assignmnet

// // view ();

// // function view(){   //statement / declartion function     hoisting

// //     console.log("welcome");
// // }

// // /**
// //  * hoisting   "raf3"
// //  *
// //  * variables
// //  * function
// //  */

// // //calculateArea(15,30);

// // var calculateArea = function (x , y){    //expression function    no hoisting
// //     return x*y;

// // }

// // //calculateArea(10,5); //value

// // var r = calculateArea(6,12);

// // console.log(calculateArea(10,5))
// // var num=20;

// // function test(){
// //     var num =10;
// //     alert(num);
// //     alert(age);

// // }
// // var age=25;  //global variable

// // alert(num)

// // test();
// // //alert(num);

// // // self invoked function
// // //for dublicate name of varables

// // (function(){

// //     console.log("hello")
// // })();

// // (function(){

// // })();

// var student = {
//   // property1:value1,property2:value2,property3:value3
//   name: "merit",
//   age: 25,
//   level: 4,
//   uni: "cairo",
//   faculty: "fci",
//   getsalary: function() {
//     return 5000;
//   },
//   getAge: function() {
//     return 7;
//   },
//   subjects: {
//     sub1: "db",
//     sub2: "AI",
//     sub3: "math"
//   }
// }; //object


// console.log(student);

// alert(student["name"]);


// student.age;//25

// console.log(student.getAge())

Math.floor(3.7) //btshel el ksr
Math.ceil(3.7)  //btrf3 el rkm
Math.round(3.2) //bt3ml t2reb ~
Math.random()
alert(Math.floor(3.7));


// java self  scheme


/* functional programming lang

1-function can be assigned to variable

var x = test();
var view = function (){}

2-function can be property of object

var student ={
    getAge:function(){}
}

3-function can be a parameter for another function


function ay7aga(x){
    return x*10;

}

ay7aga(Math.min(10,20,30));



4- function can be returned from another function

function xyz (i){
    return Math.floor(i);
}


*/ 


var colors = []; //array

//index    0      1      2      3
colors = ["red","black","blue","yellow"];

var ages = [44,25,10,30];

var mix = ["welcome",10,true,"web"];

var arrs = [
    [1,2,3],["ahmed","merit"],["welcome",1]
]


colors[4]="tomato";
colors[5]="teal";
colors[6]="white";

console.log(
    arrs[1][0]
)
var students = [
    {namd:"ahmed",age:25},
    {name:"merit",age:22}
]

console.log(colors)

console.log(
    colors[0] , 
    colors[1] , 
    colors[2] , 
    colors[3] 
)

colors.push("green")//add elemnt at last of the array
colors.pop();
colors.shift();
colors.unshift("09c");
colors.reverse();
//colors.splice(start index,number of deleted elmnts,new elmnt,new elment)


for(var i=0;i<colors.length;i++){
    // i=0
    // i=1
    // i=2
    console.log(colors[i]);
}
colors.splice(4,2,"test1","test2","test3");
console.log(colors);
