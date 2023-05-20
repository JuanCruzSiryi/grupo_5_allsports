const db = require('../../database/models');
const {User} = require('../../database/models');


const apiUsersController = {
    'list': async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const count = await User.count();
        const limit = 10;
        const offset = (page - 1) * limit;
        try {
            const users = await User.findAll({
                include: ["role", "country"],
                order: [
                  ['createdAt', 'DESC'],
                ],
                limit,
                offset
            });

            const customUsers = users.map(user => {
                const userPlain = user.get({ plain: true });
                delete userPlain.password
                return {
                    ...userPlain,
                    image_url: 'localhost:3005/images/users/'+user.image,
                    detail: 'localhost:3005/api/users/'+user.id
                };
            })

            let response = {
                meta: {
                    status: 200,
                    count,
                    page,
                    next: 'localhost:3005/api/users/?page='+(page+1),
                    previous: 'localhost:3005/api/users/?page='+(page>1?page-1:''),
                    length: users.length,
                    url: 'localhost:3005/api/users',
                },
                data: customUsers,
            }
            res.json(response)
        } catch (error) {
            res.send(error)
        }
    },
    'detail': async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id,
            {include: ["role", "country"]})
            let response = {
                meta: {
                    status: 200,
                    url: 'localhost:3005/api/users/:id'
                },
                data: user

            }
            res.json(response);
      
          } catch (error) {
            res.send(error)
        }
    }

}

module.exports = apiUsersController;