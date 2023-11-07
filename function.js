let a=10
function rule(a,b) {
  return console.log(a*b);
}
rule(a,56)

function sum(a,b,c) {
  console.log(a+b,c*b);
}
sum(3,8,6986)

// anonymous Function 
var add = function() {
  console.log("Hellow Developers");
}
add()

// Arrow Function 

// var Addition = ()=> {    }
var Addtion = (a,b) => {
  return a+b+
  console.log("Arrow Function ");
}
Addtion(1,2)
var sum=()=> Addtion(1,2)
console.log(sum(1,3));