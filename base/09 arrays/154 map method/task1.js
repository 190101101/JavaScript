const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJuliaData1 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJaneData2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10] 
const catsJuliaData2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]

const verifyCats = (catsJane, catsJulia) => {
    const catsJaneCorrect = catsJane.slice();
    catsJaneCorrect.splice(0, 1);
    catsJaneCorrect.splice(-1);

    const cats = catsJaneCorrect.concat(catsJulia);

    cats.forEach((catAge, index) => {
        if(catAge >= 2){
            console.log(`кошка номер: ${index+1} взрослая, ей ${catAge} лет`)
        } else{
            console.log(`кошка номер: ${index+1} еще котенок`)
        }
    })
}

// verifyCats(catsJaneData1, catsJuliaData1);
verifyCats(catsJaneData2, catsJuliaData2);