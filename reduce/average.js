const a=[3,4,5,2,1]
l=a.reduce((acc,num)=>{
    acc=acc+num/a.length
    return acc
},0);
console.log(l);