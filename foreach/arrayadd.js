    array1=[1,2,3,4,5];
    array2=[1,2,3,4,5];
    new_array=[]
    array1.forEach((e1,i )=> {
        e2=array2[i];
        sum=e1+e2;
        new_array.push(sum)
    });
    console.log(new_array);
