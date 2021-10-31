function factorialIterative (n) {
    var factorial = 1;
    for (let index = 2; index <= n; index++) {
        factorial*=index;
    }
    return factorial;
};

console.log(factorialIterative(10));