a=["pravin","abdul","kalam","pravin","pravin","abdul"]
l=a.map((e,i,arr)=>{
    if(arr.indexOf(e)===i)
    {
        return e
    }
}).filter(e=>e)
console.log(l)