module.exports = (sequelize, DataTypes) => {
    const Adoption = sequelize.define("adoption", {
        idAdoption: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1
        },
        date: {
            type: DataTypes.DATEONLY
        },
    });
    return Interaction;
  };