module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        arg: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        cm: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        eur: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: true
        },
        uk: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: true
        },
        us: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: true
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Size = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    Size.associate = models => {
        Size.hasMany(models.Product, 
            {
                as: "products",
                foreignKey: "size_id",
                timestamps: false
            })
    }

    return Size
};
