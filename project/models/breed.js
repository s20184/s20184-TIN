module.exports = (sequelize, DataTypes) => {
    const Breed = sequelize.define("breed", {
        idBreed: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: DataTypes.STRING(30)
        },
        description: {
            type: DataTypes.STRING(300)
        }
    });
    return Breed;
  };