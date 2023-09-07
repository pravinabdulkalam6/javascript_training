const a=[{name:"pencil",category:"stationary",price:5},{name:"eraser",category:"stationary",price:2},{name:"watch",category:"wearables",price:50}]  
 a.reduce((e,acc)=>{
    if(e.category==acc.category)
    {
        e=e+acc.price
    }
 },{})
