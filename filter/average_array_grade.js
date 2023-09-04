a=[{"name":"pravin","grade1":90,"grade2":80,"grade3":50,"grade4":50,"grade5":60},{"name":"santhosh","grade1":80,"grade2":70,"grade3":50,"grade4":90,"grade5":80},{"name":"pravin ak","grade1":80,"grade2":80,"grade3":30,"grade4":80,"grade5":60}]
l=a.filter(e=>{
    sum=(e.grade1+e.grade2+e.grade3+e.grade4+e.grade5)/5;
    if(sum>70){
        return e;
    }
})
console.log(l)