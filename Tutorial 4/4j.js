function binarySearch(array, key, startIndex, endIndex){
    console.log("Looking for index of key ".concat(key).concat("..."));
    let len = array.length;
    let middleIndex = Math.floor((endIndex+startIndex)/2);
    let middleElement = array[middleIndex];
    if(key == middleElement){
        return middleIndex;
    }
    if(key < middleElement) {
        return binarySearch(array, key, startIndex, middleIndex-1);
    } else {
        return binarySearch(array, key, middleIndex+1, len-1);
    }
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(arr, 2, 0, arr.length-1));
console.log(binarySearch(arr, 5, 0, arr.length-1));
console.log(binarySearch(arr, 9, 0, arr.length-1));