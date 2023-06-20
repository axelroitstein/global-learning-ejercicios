const arraySeven = [9,5,10,2,24,-1];

function adjacentElementsProduct(array){
    
    const productArray = array.map(element => (array(array.indexOf(element)) * array(array.indexOf(element) + 1 )))
    return productArray;
}

console.log(adjacentElementsProduct(arraySeven));


/*
for( let i=0; i <= array.length ; i++){
*/

/*
let i = 0;
        do{
            array[i] * array[i+1];
            i++;
        }while(i<=array.length);
    } )
    return productArray;
*/

/*
const arraySeven = [9,5,10,2,24,-1];

function adjacentElementsProduct(array){
    
    const productArray = array.map(element => element * array(array.indexOf(element) + 1 ))
    return productArray;
}

console.log(adjacentElementsProduct(arraySeven));


*/