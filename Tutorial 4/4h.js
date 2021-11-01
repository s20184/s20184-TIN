function secondLowestAndGreatest(array) {
    let len = array.length;
    function sort(array){
        for(let i = 0; i < len; i++){
            for(let j = 0, stop = len-1; j < stop; j++){
                if(array[j] > array[j+1]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        return array;
    }

    array = sort(array);
    let secondmin = len == 1 ? array[0] : array[1];
    let secondmax = len == 1 ? array[0] : array[array.length-2];

    return "Second lowest element: ".concat(secondmin)
    .concat("\nSecond greatest element: ").concat(secondmax);
}
let array1 = [1,2,3,4,5,6,7,8,9];
let array2 = [423,12,765,23,67,8];
console.log(array1);
console.log(secondLowestAndGreatest(array1));
console.log(array2);
console.log(secondLowestAndGreatest(array2));