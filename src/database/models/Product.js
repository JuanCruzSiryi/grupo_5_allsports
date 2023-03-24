module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        brand_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        tag_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        color_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(150),
            allowNull: true
        },
        size_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(3,1),
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
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id",
            timestamps: false
        })
        Product.belongsTo(models.Brand, {
            as: "brand",
            foreignKey: "brand_id",
            timestamps: false
        })
        Product.belongsTo(models.Color, {
            as: "color",
            foreignKey: "color_id",
            timestamps: false
        })
        Product.belongsTo(models.Tag, {
            as: "tag",
            foreignKey: "tag_id",
            timestamps: false
        })
        Product.belongsTo(models.Size, {
            as: "size",
            foreignKey: "size_id",
            timestamps: false
        })
    }

    return Product
};
