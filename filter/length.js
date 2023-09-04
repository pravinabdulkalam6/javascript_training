a=[{"name":"pravin","salary":5000},{"name":"santhosh","salary":10000},{"name":"nanthu","salary":8000}]
l=a.filter(e=>
    {if(e.name.length>7)
    {
        return e.name;
    }
}).map(e=>e.name)
console.log(l)
