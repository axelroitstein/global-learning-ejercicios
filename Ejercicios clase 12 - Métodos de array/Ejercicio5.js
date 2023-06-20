const arrayFive = [1,1,1,1,2,1,1,1];
let mostRepeatedNumber = 1;

function findUniq(array, n){
    const found = array.find(differentNumber => differentNumber !== n);
    console.log(found);
}

findUniq(arrayFive, mostRepeatedNumber);

