a=["hello world","my friend","new world","hello how are u"]
l=a.reduce((e,acc)=>{
    if(e.length<acc.length  )
    {
        return acc
    }
    else
    {
        return e
    }
},"")
console.log(l)