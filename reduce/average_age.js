const a=[{name:"pravin",age:19},{name:"nanthu",age:20},{name:"shree",age:21}]
 l=a.reduce((e,acc)=>{
     e=e+acc.age/a.length
     return e
 },0);
 console.log(l)