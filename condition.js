// var a = 23;
// if(a>=20){
//   console.log(a);
// }

a = 40;
b = 20;
c = 30;
if(a>b && c>a){
  console.log(b,a,c);
}
else if(a<b && b<c){
  console.log(a,b,c);
}
else if(b<a && a>c)  {
  console.log(b,c,a);
}
else {
  console.log(c,a,b);
}