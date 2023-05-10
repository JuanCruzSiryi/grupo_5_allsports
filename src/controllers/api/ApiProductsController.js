const db = require('../../database/models');
const {Product} = require('../../database/models');


const productsController = {
    'list': async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const count = await Product.count();
        const limit = 10;
        const offset = (page - 1) * limit;
        try {
            const products = await Product.findAll({
                include: ["category", "color", "size", "tag", "brand"],
                order: [
                  ['createdAt', 'DESC'],
                ],
                limit,
                offset
            });

            // const byCategory = await Product.findAll({
            //     attributes: ['category', [db.Sequelize.fn('COUNT', 'category'), 'total']],
            //     group: ['category']
            // });

            let response = {
                meta: {
                    status: 200,
                    count,
                    page,
                    length: products.length,
                    url: 'localhost:3005/api/products',
                    
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
                    url: 'localhost:3005/api/products/:id'
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