const db = require('../../database/models');
const {Product} = require('../../database/models');


const productsController = {
    'list': async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const count = await Product.count();
        const limit = 100;
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

            const byCategory = await Product.findAll({
                include: ["category"],
                attributes: ['category_id', [db.Sequelize.fn('COUNT', 'category'), 'products']],
                group: ['category_id']
            });

            const newProducts = products.map(product => {
                const productoPlain = product.get({ plain: true });
                return {
                    ...productoPlain,
                    detail: 'localhost:3005/api/products/'+product.id
                };
            })

            let response = {
                meta: {
                    status: 200,
                    count,
                    page,
                    next: 'localhost:3005/api/products/?page='+(page+1),
                    previous: 'localhost:3005/api/products/?page='+(page>1?page-1:''),
                    length: products.length,
                    byCategory,
                    url: 'localhost:3005/api/products',
                },
                data: newProducts,
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