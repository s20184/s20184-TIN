const temp_converter = require('./temp_converter.js');
const dist_converter = require('./dist_converter.js');

document.getElementById("tempButton").addEventListener("click", calculateTemperature);
document.getElementById("distButton").addEventListener("click", calculateDistance);

function calculateTemperature(){
    var from = document.getElementById("tempFrom").value;
    var to = document.getElementById("tempTo").value;;
    var amount = document.getElementById("tempAmountFrom").value;
    var result = temp_converter.convert(from, to, amount);
    document.getElementById("tempAmountTo").value = result;
}

function calculateDistance(){
    var from = document.getElementById("distFrom").value;
    var to = document.getElementById("distTo").value;
    var amount = document.getElementById("distAmountFrom").value;
    var result = dist_converter.convert(from, to, amount);
    document.getElementById("distAmountTo").value = result;
}