/*
let number = 5;

function createArrayWithNumber(n){
    array=[];
    for(let i = 1; i < n; i++){
        array.push(i);
    }
    return array;
}

createArrayWithNumber(number);
*/


let number = 5;
function createArrayWithNumber(n){
    const array=[];
    let i = 1
    while(i <= n){
        array.push(i);
        i++;
    }
    return array;
}

createArrayWithNumber(number);
