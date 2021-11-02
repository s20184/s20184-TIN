var myCat = {
    name: "Kluseczka",
    age: 4,
    clawLength: 10,

    meow () {
        console.log(this.name+" meows.")
    },

    scratch () {
        let scratchResults = [
            "negligible", 
            "mild",
            "moderate",
            "painful",
            "debilitating",
            "fatal"];
        let result = scratchResults[Math.floor(Math.random()*(scratchResults.length))];
        console.log(`${this.name} scratches with a ${result} result.`)
    },

    haveZoomies (hours) {
        var brokenItems = Math.floor(Math.random()*4+1)
        *hours*this.clawLength;
        console.log(`${this.name} had zoomies and broke ${brokenItems} items.`);
    }
};

myCat.meow();
myCat.scratch();
myCat.haveZoomies(2);

function printProperties(cat){
    console.log(`Properties of ${cat.name}`);
    for(const property in cat){
        console.log(`${property}: ${typeof cat[property]}`);
    }
}

printProperties(myCat);