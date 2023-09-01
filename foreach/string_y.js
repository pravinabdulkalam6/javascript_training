string="goodmorning";
let flag=false;
string.split('').forEach(e => {
    if(e==='y')
    {
        flag=true;
    }
});
if(flag)
{
    console.log("Yes");
}
else{
    console.log("No");
}
