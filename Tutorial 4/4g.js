function getType(arg){
    return typeof arg;
}

console.log(getType(12));
console.log(getType("a string"));
console.log(getType(true));
console.log(getType([1,2,3,4]));