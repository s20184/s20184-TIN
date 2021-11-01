function fibonacci (n) {
    if(n <= 0) return 0;
    return n == 1 ? 1 : fibonacci(n-1)+fibonacci(n-2)
};
console.log("F(0): " + fibonacci(0));
console.log("F(1): " + fibonacci(1));
console.log("F(2): " + fibonacci(2));
console.log("F(3): " + fibonacci(3));
console.log("F(4): " + fibonacci(4));
console.log("F(5): " + fibonacci(5));
console.log("F(6): " + fibonacci(6));