const db = require('../../database/models');
const {Product} = require('../../database/models');


const productsController = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                let response = {
                    meta: {
                        status: 200,
                        cantidad: products.length,
                        url: 'localhost:3005/api/products'
                    },
                    data: products

                }
                res.json(response)
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let response = {
                    meta: {
                        status: 200,
                        url: 'localhost:3005/api/product/:id'
                    },
                    data: product

                }
                res.json(response);
            });
    }

}

module.exports = productsController;