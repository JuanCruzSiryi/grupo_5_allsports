const db = require('../../database/models');
const {Product} = require('../../database/models');


const productsController = {
    'list': async (req, res) => {
        try {
            const products = await Product.findAll();
            let response = {
                meta: {
                    status: 200,
                    cantidad: products.length,
                    url: 'localhost:3005/api/products'
                },
                data: products
            }
            res.json(response)
        } catch (error) {
            res.send(error)
        }
    },
    'detail': async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id,
            {include: ["category", "color", "size", "tag", "brand"]})
            let response = {
                meta: {
                    status: 200,
                    url: 'localhost:3005/api/product/:id'
                },
                data: product

            }
            res.json(response);
      
          } catch (error) {
            res.send(error)
        }
    }

}

module.exports = productsController;