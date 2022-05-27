let db = require("../../database/models");
const { users } = require("../usersControllers");
const Op = db.sequelize.Op;

module.exports = {
    list: async (req, res) => {
        let users = await db.user.findAll({ attributes: ['user_id', 'first_name', 'last_name', 'email'] })

        users.forEach(user => {
            user.setDataValue("endpoint", "localhost3000/api/products/" + user.user_id);
        })


        let jsonUsers = {
            meta: {
                status: 200,
                count: users.length,
                url: "localhost3000/api/users"
            },
            users: users
        }
        res.json(jsonUsers)

    },

    show: (req, res) => {
        db.user
            .findByPk(req.params.id, { attributes: ['user_id', 'first_name', 'last_name', 'email'] })
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
    }

}