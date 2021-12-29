exports.convert = function(from, to, amount){
    var amountAsFloat = parseFloat(amount);
    if(to==="celsius") {
        return convertToCelsius(from,amountAsFloat);
    }
    if(to==="kelvin"){
        return convertToKelvin(from,amountAsFloat);
    }
    if(to==="fahrenheit"){
        return convertToFahrenheit(from,amountAsFloat);
    }
    return "Unsupported operation.";
}

function convertToCelsius(from, amount){
    if(from==="celsius"){
        return amount;
    }
    if(from==="fahrenheit"){
        return (amount-32)*5/9;
    }
    if(from==="kelvin"){
        return amount-273.15;
    }
    return "Something went wrong during conversion to Celsius.";
}

function convertToKelvin(from, amount){
    if(from==="kelvin"){
        return amount;
    }
    if(from==="celsius"){
        return amount+273.15;
    }
    if(from==="fahrenheit"){
        return (amount+459.67)*(5/9);
    }
    return "Something went wrong during conversion to Kelvin.";
}

function convertToFahrenheit(from, amount){
    if(from==="fahrenheit"){
        return amount;
    }
    if(from==="celsius"){
        return (amount*9/5)+32;
    }
    if(from==="kelvin"){
        return ((amount*9/5)-459.67);
    }
    return "Something went wrong during conversion to Fahrenheit.";
}