a="madam"
n=a.length;
flag=true;
for(i=0;i<n/2;i++)
{
    if(a.charAt(i)!=a.charAt(n-1))
    {
        flag=false;
        break;
    }
    n--;
}
if(flag==true)
console.log("palindrome")
else
console.log("not a palindrome")


