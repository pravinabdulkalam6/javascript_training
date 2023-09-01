a=[{name:"pravin"},{name:"abdul"},{name:"kalam"}]
  b=a.map(e => {
    return {name:e.name.charAt(0).toUpperCase()+e.name.slice(1)
  }})
   console.log(a)
  console.log(b);
 
 