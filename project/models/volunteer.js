module.exports = (sequelize, DataTypes) => {
    const Volunteer = sequelize.define("Volunteer", {
        idVolunteer: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV1
        },
        name: {
            type: DataTypes.STRING(30)
        },
        surname: {
            type: DataTypes.STRING(30)
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY
        },
        email: {
            type: DataTypes.STRING(40)
        },
        phoneNumber: {
            type: DataTypes.STRING(20)
        }
    });
    return Volunteer;
  };