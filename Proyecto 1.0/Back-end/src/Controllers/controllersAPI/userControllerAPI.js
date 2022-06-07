let db = require("../../database/models");
const { users } = require("../usersControllers");
const Op = db.sequelize.Op;

module.exports = {
    list: async (req, res) => {
        let users = await db.user.findAll({ attributes: ['user_id', 'first_name', 'last_name', 'email'] })

        users.forEach(user => {
            user.setDataValue("endpoint", "localhost:3001/api/users/" + user.user_id);
        })


        let jsonUsers = {
            meta: {
                status: 200,
                count: users.length,
                url: "localhost:3001/api/users"
            },
            users: users
        }
        res.json(jsonUsers)

    },

    show: (req, res) => {
        db.user
            .findByPk(req.params.id)
            .then(user => {
            let jsonUser = {
                meta: {
                    status: 200,
                    url: "localhost:3001/api/users/" + req.params.id
                },
                data: {
                    user_id: user.user_id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    image: "http://localhost:3001/images/users/" + user.image
                }
            }
            res.json(jsonUser);

        })
    },

  

}