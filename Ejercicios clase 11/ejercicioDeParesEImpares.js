let lowerLimitEven = 0;

let upperLimitEven = 16;

let lowerLimitOdd = 1;

let upperLimitOdd = 20;

function mostrarPares(num){
    if(num%2 === 0){
        console.log(num)
    }
}

function mostrarImpares(num){
    if(num%2 !== 0){
        console.log(num)
    }
}

for(i = -4; i >= lowerLimitEven && i <= upperLimitEven; i++){
    mostrarPares(i);
}

for(i = -5; i >= lowerLimitOdd && i <= upperLimitOdd; i++){
    mostrarImpares(i);
}

