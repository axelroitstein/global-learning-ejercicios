const bigArray = [46, 991, 2, 59, 485, 1533]; 
const smallArray = [77, 42, 384, 666, ];

function arraysWithMoreOrLessThanFive(array){
    if(array.length > 5){
        for( let i = 0; i < 3; i++){
            array.pop();
            }
            return array;
        } else{
            console.log("Este array tiene menos de 5 elementos.")
        }
    }

console.log(bigArray.length);
console.log(arraysWithMoreOrLessThanFive(bigArray));
console.log(arraysWithMoreOrLessThanFive(smallArray));


/*
    const arrayWithMoreThanFive = [46, 991, 2, 59, 485, 1533,7849]; 
const arrayWithLessThanFive = [77, 42, 384, 666];


function popArrayThreeTimes(array){
    for( let i = 0; i < 3; i++){
    array.pop();
    }
}

function arraysWithMoreOrLessThanFive(array, callback){
    if(array.length > 5){
            callback(array);
            return array;
        } else{
            console.log("Este array tiene menos de 5 elementos.")
        }
    }

console.log(arrayWithMoreThanFive);
console.log(arraysWithMoreOrLessThanFive(arrayWithLessThanFive, popArrayThreeTimes(arrayWithLessThanFive)));
*/

