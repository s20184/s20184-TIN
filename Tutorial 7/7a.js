var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;
    var operation = query.operation;
    var stringA = query.a;
    var stringB = query.b;

    if(stringA === "" || stringB === "") {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.end("Some parameters are missing!");
        return;
    }

    var numberA = parseFloat(stringA, 10);
    var numberB = parseFloat(stringB, 10);

    if(isNaN(numberA) || isNaN(numberB)) {
        response.writeHead(400, {"Content-Type": "text/plain"});
        response.end("Wrong parameter types!");
        return;
    }

    var result = getResult(operation, numberA, numberB);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(`operation: ${operation}\n
    a=${numberA}\t
    b=${numberB}\n
    result=${result}`);

}).listen(8080, '127.0.0.1');

function getResult(operation, a, b){
    if (operation === "add") {
        return getAdd(a,b);
    } else if (operation === "sub") {
        return getSub(a,b);
    } else if (operation === "mul") {
        return getMul(a,b);
    } else if (operation === "div") {
        return getDiv(a,b);
    } else throw new Error("Whoops");
}

function getAdd(a,b){
    return (a+b);
}

function getSub(a,b){
    return (a-b);
}

function getMul(a,b){
    return (a*b);
}

function getDiv(a,b){
    return (a/b);
}

console.log("7a server running at http://127.0.0.1:8080");
