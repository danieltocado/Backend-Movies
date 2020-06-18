const { User, Token } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
    async getUsers(req,res) {
        try {
            const users = await User.findAll();
            res.status(200).send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the user.' });
        }
    },
    async signup(req,res) {
        try {
            const user = await User.create(req.body);
            //Hash password
            const hash = await bcrypt.hash(req.body.password, 9);
            req.body.password = hash;
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to create the account.'})
        }
    },
    async login(req,res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                throw new Error('Wrong username or password.')
            }

            const token = jwt.sign({ id: user.id}, 'patata123', { expiresIn: '2y' });
            await Token.create({ 
                token:token,
                UserId: user.id,
                revoked: false
            });

            res.send({ user, token })
        
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                message: 'There was a problem trying to login'
            });
        }
    }
}

module.exports = UserController;