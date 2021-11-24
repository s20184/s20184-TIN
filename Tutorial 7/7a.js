var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
    var query = url.parse(request.url, true).query;
    var operation = query.operation;
    var stringA = query.a;
    var stringB = query.b;

    if(!(arePresent(operation, stringA, stringB))) {
        response.writeHead(400, {"Content-Type": "text/html"});
        response.write("<html><body>");
        response.write("<p>Some parameters are missing!</p>");
        response.write("<p>Necessary parameters: operation, a, b</p>");
        response.end("</html></body>");
        return;
    }

    if(!(isCorrectOperation(operation))) {
        response.writeHead(400, {"Content-Type": "text/html"});
        response.write("<html><body>");
        response.write("<p>Unsupported operation type!</p>");
        response.write("<p>Supported operations: add, sub, mul, div</p>");
        response.end("</html></body>");
        return;
    }

    var numberA = parseFloat(stringA, 10);
    var numberB = parseFloat(stringB, 10);

    if(!(areNumbers(numberA, numberB))) {
        response.writeHead(400, {"Content-Type": "text/html"});
        response.write("<html><body>");
        response.write("<p>Wrong parameter types!</p>");
        response.write("<p>a and b have to be numbers.</p>");
        response.end("</html></body>");
        return;
    }

    var result = getResult(operation, numberA, numberB);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><body>");
    response.write(`<p>Operation: ${operation}</p>`);
    response.write(`<p>a=${numberA}; b=${numberB}</p>`);
    response.write(`<p>result=${result}</p>`);
    response.end("</html></body>");
}).listen(8080, '127.0.0.1');

function isCorrectOperation(operation){
    return (operation === "add"
    || operation === "sub" 
    || operation === "mul" 
    || operation === "div");
}

function arePresent(...arguments){
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] === undefined) return false;
    }
    return true;
}

function areNumbers(...arguments){
    for(let i = 0; i < arguments.length; i++){
        if(isNaN(arguments[i])) return false;
    }
    return true;
}

function getResult(operation, a, b){
    if (operation === "add") {
        return getAdd(a,b);
    } else if (operation === "sub") {
        return getSub(a,b);
    } else if (operation === "mul") {
        return getMul(a,b);
    } else if (operation === "div") {
        return getDiv(a,b);
    } else throw new Error("Unexpected error while retrieving result");
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
