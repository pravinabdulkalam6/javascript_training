a=[2,4,5,6,1,8,9,2,3,9]
l=a.reduce((e,acc)=>{
    return e*acc
},1)
console.log(l)