a=[1,2,3,4,5];
b=[1,2,3,4,5];
let totalsum=0;
a.forEach(function(item){
    totalsum=totalsum+item;
});
b.forEach(function(item){
    totalsum=totalsum+item;
});
console.log(totalsum);