var factorialRecursive = function fun(n) { 
    return n < 2 ? 1 : n * fun(n-1);
};

console.log(factorialRecursive(10));


