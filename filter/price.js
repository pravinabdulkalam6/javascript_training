a=[{"name":"pravin","salary":5000},{"name":"abdul","salary":10000},{"name":"kalam","salary":8000}]
l=a.filter(e=>{
    if(e.salary<10000){
        return e.name

    }}).map(e=>e.name)
console.log(l)
a=[{icecream:"vannila",price:50},{icecream:"chocolate",price:20}]
l=a.filter(e=>e.price>=50)
console.log(l)

