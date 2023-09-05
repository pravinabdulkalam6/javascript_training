const a=[{item:"pen",quantity:2,price:5},{item:"pencil",quantity:4,price:2},{item:"eraser",quantity:1,price:3}]
l=a.reduce((e,a)=>{
    e=e+a.quantity*a.price;
    return e
},0);
console.log(l)