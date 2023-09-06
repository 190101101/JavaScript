'use strict'

// rest pattern with function
const sum = function(...p1){
    let sum = 0;
    for(let i = 0; i < p1.length; i++){
        sum += p1[i];
    }
    console.log(sum);
}

const numbers = [2, 5, 7, 9];
sum(...numbers);