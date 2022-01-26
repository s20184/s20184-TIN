module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "HokeyPokey123",
    DB: "shelterDb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 10000,
      idle: 10000
    }
  };