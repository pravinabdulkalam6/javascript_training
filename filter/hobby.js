a=[{"name":"pravin","hobby":"reading"},{"name":"santhosh","hobby":"eating"},{"name":"nanthu","hobby":"reading"}]
l=a.filter(e=>{
    if(e.hobby=="reading")
    return e
})
console.log(l)