const {Category} = require('../../database/models');


const apiCategoriesController = {
    'list': async (req, res) => {
        const count = await Category.count();
        try {
            const categories = await Category.findAll();

            const customCategories = categories.map(category => {
                const categoryPlain = category.get({ plain: true });
                console.log(categoryPlain);
                return {
                    ...categoryPlain,
                    detail: 'localhost:3005/api/categories/'+category.id
                };
            })
            let response = {
                meta: {
                    status: 200,
                    count,
                    url: 'localhost:3005/api/categories',
                },
                data: customCategories,
            }
            res.json(response)
        } catch (error) {
            res.send(error)
        }
    },
    'detail': async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id)
            let response = {
                meta: {
                    status: 200,
                    url: 'localhost:3005/api/categories/:id'
                },
                data: category

            }
            res.json(response);
      
          } catch (error) {
            res.send(error)
        }
    }

}

module.exports = apiCategoriesController;