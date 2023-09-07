const a=[{name:"pravin",salary:19000},{name:"nanthu",salary:20000},{name:"shree",salary:21000}]
l=a.reduce((e,acc)=>{
    e=e+acc.salary/a.length
    return e
},0)
console.log(l)