a=["pravin","santhosh","vetri","david","madam","one","malayalam"];

l=a.filter(e=>{
    rev=e.split("").reverse().join("");
    if(rev==e)
    {
        return rev
    }
})
console.log(l)