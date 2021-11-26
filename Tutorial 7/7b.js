var fs = require('fs');
var directory = process.argv.slice(2)[0];

fs.watch(directory, (eventType, filename) => {
    console.log(`\nThe file ${filename} was modified:`);
    var buffer = new Buffer.from(fs.readFileSync(filename, 'utf-8'));
    console.log(buffer.toString());
});






