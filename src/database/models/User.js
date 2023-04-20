module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        // deleted_at: now()
        firstName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(150),
            allowNull: true
        },
        role_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        address: {
            type: dataTypes.STRING,
            allowNull: true
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
        state: {
            type: dataTypes.INTEGER,
            allowNull: true
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false,
        tablename: 'users'
    }
    const User = sequelize.define(alias, cols, config); 

    //Aquí debes realizar lo necesario para crear las relaciones con el modelo (Movie)
    // User.associate = models => {
    //     User.belongsToMany(models.Movie, 
    //         {
    //             as: "movies",
    //             through: "actor_movie",
    //             foreignKey: "actor_id",
    //             otherKey: "movie_id",
    //             timestamps: false
    //         })
    // }
    User.associate = models => {
        User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id",
            timestamps: false
        })
        User.belongsTo(models.Country, {
            as: "country",
            foreignKey: "country_id",
            timestamps: false
        })
    }

    return User
};
