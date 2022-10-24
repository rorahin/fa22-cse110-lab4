function modifyArray(array, callBack){
    const newArr= [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callBack(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function doSomething(num){
    return num * 2;
}

modifyArray([1,2,3], doSomething);