const arrayThree = [25, 49, 71, 154, 302];
let number = 5;

function addNumberToElements(array, n){
const newArray = array.map(arrayNum => arrayNum + n);
return newArray;
}

console.log(arrayThree);
console.log(addNumberToElements(arrayThree, number));

/*
function addNumberToElements(array, num){
    let i= 0;
    while(i < array.length){
        const newArray = array.map(num => array[i] + num) 
        i++;   
    }
    return newArray;
}

console.log(addNumberToElements(arrayThree, number));
*/