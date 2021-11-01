function isPrime(n){
    if(n == 0) return false;
    if(n == 1) return true;
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(383));
console.log(isPrime(500));
console.log(isPrime(653));
console.log(isPrime(777));