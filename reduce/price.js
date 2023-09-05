 const a=[{item:"pencil",price:5},{item:"eraser",price:6},{item:"pen",price:10}]
 l=a.reduce((e,a)=>{
    e=e+a.price;
    return e;
    },0)
console.log(l)