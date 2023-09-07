const a=["pravin","pravin","abdul","abdul"]
obj={};
a.map(e=>{
obj[e]=(obj[e]+1)||1
});
console.log(obj)