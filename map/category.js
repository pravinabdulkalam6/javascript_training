a=[{name:"chocolate",category:"sweet"},{name:"lollipop",category:"sweet"},{name:"pani puri",category:"spicy"}]
obj={}
a.map((e,i)=>{
    obj[e.category]=obj[e.name]
})
console.log(obj)