function longest(string){
    var array = string.split(' ');
    var max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i].length > max.length) {
            max = array[i];
        }
    }
    return max;
}

console.log(longest("ahahhsihwn fignoe mfinfonrrt koksoamomfe"));