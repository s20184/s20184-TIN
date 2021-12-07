const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/calculate', (req,res) => {
    var a = parseFloat(req.body.a, 10);
    var b = parseFloat(req.body.b, 10);
    var operation = req.body.operation;
    var result = calculate(a,b,operation);
    if(result === null) {result = "You must have entered wrong parameters."};
    res.json({result: result});
});

function calculate(a,b,operation) {
    if(operation === "add") {
        return a+b;
    } else if (operation === "sub") {
        return a-b;
    } else if (operation === "mul") {
        return a*b;
    } else if (operation === "div") {
        return a/b;
    } else return "You must have entered a wrong operation.";
}

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})