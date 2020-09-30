module.exports = (sequelize, DataTypes) => {
    const Spot = sequelize.define('spots', {
        city: {
            type: DataTypes.STRING
        },
        latitude: {
            // data will inculide up to 18 number, 3 int, 15 dec
            type: DataTypes.DECIMAL(18, 15)
        },
        longitude: {
            type: DataTypes.DECIMAL(18, 15)
        },
        cross_street: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        security_guards: {
            type: DataTypes.BOOLEAN
        }
    });
    return Spot;
};