'use strict';

const sum = function(...p1){
    let p2 = 0;
    for(let i = 0; i < p1.length; i++){
        p2 += p1[i];
    }
    console.log(p2);
}

sum(12,13,4,);
sum(2,3,4,5,6);
sum(2,3,5,7);
sum(1,2,3);

const nums = [1,2,3,4,5,6]
sum(...nums);