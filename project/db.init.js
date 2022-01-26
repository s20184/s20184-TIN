module.exports.dropTasks = "DROP TABLE IF EXISTS TASKS; ";
module.exports.dropPets = "DROP TABLE IF EXISTS PETS; ";
module.exports.dropBreeds = "DROP TABLE IF EXISTS BREEDS; ";
module.exports.dropVolunteers = "DROP TABLE IF EXISTS VOLUNTEERS; ";

module.exports.createVolunteers = "CREATE TABLE IF NOT EXISTS VOLUNTEERS (volunteer_id INTEGER auto_increment UNIQUE, name VARCHAR (40) NOT NULL, surname VARCHAR (40) NOT NULL, date_of_birth DATE not null, date_acquired DATE NOT NULL, email VARCHAR(100), phone_number VARCHAR(40), PRIMARY KEY (volunteer_id)) ENGINE=INNODB; ";
module.exports.createBreeds = "CREATE TABLE IF NOT EXISTS BREEDS (breed_id INTEGER auto_increment UNIQUE, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), is_aggressive TINYINT(1), PRIMARY KEY (breed_id)) ENGINE=INNODB; ";
module.exports.createPets = "CREATE TABLE IF NOT EXISTS PETS (pet_id INTEGER auto_increment UNIQUE, breed_id INTEGER, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), date_acquired DATE NOT NULL, is_adopted TINYINT(1), PRIMARY KEY (pet_id), FOREIGN KEY (breed_id) REFERENCES breeds(breed_id) ON DELETE CASCADE) ENGINE=INNODB; ";
module.exports.createTasks = "CREATE TABLE IF NOT EXISTS TASKS (task_id INTEGER auto_increment UNIQUE, pet_id INTEGER, volunteer_id INTEGER not null, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), deadline DATE NOT NULL, PRIMARY KEY (task_id), FOREIGN KEY (pet_id) REFERENCES pets(pet_id) ON DELETE CASCADE, FOREIGN KEY (volunteer_id) REFERENCES volunteers(volunteer_id) ON DELETE CASCADE) ENGINE=INNODB; ";
