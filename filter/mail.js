a=[{"name":"pravin","mail":"pravinak6@gmail.com"},{"name":"santhosh","mail":"assuj@mail.com"},{"name":"nanthu","mail":"@gmail.com"}]
text="@gmail.com";
n=a.length
l=a.filter(e=>{
    if(e.mail.includes(text,n-10))
    {
        return e
    }
});
console.log(l)