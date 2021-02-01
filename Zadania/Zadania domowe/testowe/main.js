
let tab1 = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function insertionSort(tablica){
    for(let i = 0; i < tablica.length; i++){
        let j = i;
        while(tablica[j-1] > tablica[j] && j > 0){
            let nowaTablica = tablica[j];
            tablica[j] = tablica[j-1];
            tablica[j-1] = nowaTablica;
            j--;
        }
    }
    return tablica;
}

console.log(insertionSort(tab1))
