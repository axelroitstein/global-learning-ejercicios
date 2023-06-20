const arraySix = [7, 4, 2, 3];

const addTwoSmallestNumbers = (array) => array[0] + array[1];

function minSum(array, callback){
    array.sort();
    const arrayWithTwoSmallestNumbers = array.slice(0,2);
    return callback(arrayWithTwoSmallestNumbers);
}

minSum(arraySix, addTwoSmallestNumbers);


/*
arraySix.sort();
console.log(arraySix);
console.log(Math.max(...arraySix));
*/