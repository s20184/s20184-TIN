function amountToCoins(amount, coins){
    let result = new Array();
    for(let i = 0; i < coins.length; i++){
        let coin = coins[i];
        let multiplier = Math.floor(amount/coin);
        if(multiplier >= 1){
            let mod = amount % coin;
            for(let j = 0; j < multiplier; j++){
                result.push(coin);
            }
            amount = mod;
        }
    }
    return result;
}
console.log(amountToCoins(46, [25,10,5,2,1]));
console.log(amountToCoins(57, [10,2,1]));