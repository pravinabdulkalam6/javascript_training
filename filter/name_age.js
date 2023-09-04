a=[{"name":"pravin","age":18},{"name":"santhosh","age":20},{"name":"nanthu","age":21}]
l=a.filter(e=>{
    if(e.age<20)
    {
        return e.age
    }
});
console.log(l)