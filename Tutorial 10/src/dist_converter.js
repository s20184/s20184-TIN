exports.convert = function(from, to, amount){
    var amountAsFloat = parseFloat(amount);
    if(to==="kilometers"){
        return convertToKilometers(from, amountAsFloat);
    }
    if(to==="miles"){
        return convertToMiles(from, amountAsFloat);
    }
    return "Unsupported operation.";
}

function convertToKilometers(from, amount){
    if(from==="kilometers"){
        return amount;
    }
    if(from==="miles"){
        return amount*1.609344;
    }
    return "Something went wrong during conversion to kilometers.";
}

function convertToMiles(from, amount){
    if(from==="miles"){
        return amount;
    }
    if(from==="kilometers"){
        return amount*0.62137;
    }
    return "Something went wrong during conversion to miles.";
}