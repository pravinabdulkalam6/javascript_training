const a=["banana","apple","orange","banana","apple","banana","pineapple"]
l=a.reduce((e,a)=>{
    if(e.hasOwnProperty(a))
    {
        e[a]++;
    }
    else{
        e[a]=1;
    }
    return e
},{});
console.log(l)