const dbInit = require('./db.init.js');

module.exports = (connection) => {
    connection.query(dbInit.dropTasks, (err, rows) => {
        if (err) throw err;
    });
    connection.query(dbInit.dropPets, (err, rows) => {
        if (err) throw err;
    });
    connection.query(dbInit.dropVolunteers, (err, rows) => {
        if (err) throw err;
    });
    connection.query(dbInit.dropBreeds, (err, rows) => {
        if (err) throw err;
    });
    connection.query(dbInit.createBreeds, (err, rows) => {
        if (err) throw err;
    })
    connection.query(dbInit.createVolunteers, (err, rows) => {
        if (err) throw err;
    })
    connection.query(dbInit.createPets, (err, rows) => {
        if (err) throw err;
    })
    connection.query(dbInit.createTasks, (err, rows) => {
        if (err) throw err;
    })
    connection.query(dbInit.volunteer1, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.volunteer2, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.breed1, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.breed2, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.pet1, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.pet2, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.task1, (err, rows) => {
        if(err) throw err;
    })
    connection.query(dbInit.task2, (err, rows) => {
        if(err) throw err;
    })
    return "Successfully initialized database";
}