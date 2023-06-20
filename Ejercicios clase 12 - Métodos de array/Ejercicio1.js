const elements = [23, 45, 183, 90, 74];

function deleteFirstElement(array){
    array.shift();
    return array;
}

console.log(elements);
console.log(deleteFirstElement(elements));