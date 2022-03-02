module.exports.dropTasks = "DROP TABLE IF EXISTS TASKS; ";
module.exports.dropPets = "DROP TABLE IF EXISTS PETS; ";
module.exports.dropBreeds = "DROP TABLE IF EXISTS BREEDS; ";
module.exports.dropVolunteers = "DROP TABLE IF EXISTS VOLUNTEERS; ";

module.exports.createVolunteers = "CREATE TABLE IF NOT EXISTS VOLUNTEERS (volunteer_id INTEGER auto_increment UNIQUE, name VARCHAR (40) NOT NULL, surname VARCHAR (40) NOT NULL, date_of_birth DATE not null, date_acquired DATE NOT NULL, email VARCHAR(100), phone_number VARCHAR(40), PRIMARY KEY (volunteer_id)) ENGINE=INNODB; ";
module.exports.createBreeds = "CREATE TABLE IF NOT EXISTS BREEDS (breed_id INTEGER auto_increment UNIQUE, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), is_aggressive TINYINT(1), PRIMARY KEY (breed_id)) ENGINE=INNODB; ";
module.exports.createPets = "CREATE TABLE IF NOT EXISTS PETS (pet_id INTEGER auto_increment UNIQUE, breed_id INTEGER, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), date_acquired DATE NOT NULL, is_adopted TINYINT(1), PRIMARY KEY (pet_id), FOREIGN KEY (breed_id) REFERENCES breeds(breed_id) ON DELETE CASCADE) ENGINE=INNODB; ";
module.exports.createTasks = "CREATE TABLE IF NOT EXISTS TASKS (task_id INTEGER auto_increment UNIQUE, pet_id INTEGER, volunteer_id INTEGER not null, name VARCHAR (40) NOT NULL, descripton VARCHAR(500), deadline DATE NOT NULL, PRIMARY KEY (task_id), FOREIGN KEY (pet_id) REFERENCES pets(pet_id) ON DELETE CASCADE, FOREIGN KEY (volunteer_id) REFERENCES volunteers(volunteer_id) ON DELETE CASCADE) ENGINE=INNODB; ";

module.exports.volunteer1 = "INSERT INTO VOLUNTEERS VALUES (1, 'John', 'Doe', '1995-01-01', '2022-01-01', 'john.doe@email.com', '123456789'); ";
module.exports.volunteer2 = "INSERT INTO VOLUNTEERS VALUES (2, 'Jane', 'Doe', '1994-01-01', '2022-01-02', 'jane.doe@email.com', '987654321'); ";
module.exports.breed1 = "INSERT INTO BREEDS VALUES (1, 'german shepherd', 'large, agile, muscular dog of noble character and high intelligence', 0); ";
module.exports.breed2 = "INSERT INTO BREEDS VALUES (2, 'european shorthair', 'typical domestic cat of Europe', 0); ";
module.exports.pet1 = "INSERT INTO PETS VALUES (1, 1, 'Hank the Tank', 'an obese male dog, acquired by the means of intervention at negligent home', '2022-02-01', 0); ";
module.exports.pet2 = "INSERT INTO PETS VALUES (2, 2, 'Katishia', 'a mellow-tempered female cat', '2022-02-02', 1); ";
module.exports.task1 = "INSERT INTO TASKS VALUES (1, 1, 2, 'bathe', 'bathe the dog on premises', '2022-03-03'); ";
module.exports.task2 = "INSERT INTO TASKS VALUES (2, 2, 1, 'take photos', 'take photos of the animal for social media purposes', '2022-03-5'); ";