module.exports = {
    host: "localhost",
    user: "root",
    password: "HokeyPokey123",
    db: "shelterDb",
    dialect: "mysql",
    pool: {
      max: 3,
      min: 0,
      acquire: 10000,
      idle: 10000
    }
  };