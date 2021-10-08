const { User } = require('../models');

const userData = [
    {
        username: "john12",
        email: "john@gmail.com",
        password: "pass"
    },
    {
        username: "max72",
        email: "max@gmail.com",
        password: "pass"
    },
    {
        username: "mike12",
        email: "mike@gmail.com",
        password: "pass"
    }
   
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;