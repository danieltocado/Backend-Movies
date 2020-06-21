const { User, Token } = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = {
    /*getAll(req,res) {
        try {
            const users = await User.findAll();
            res.status(200).send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the user.' });
        }  
    },*/
    getAll(req, res) {
        User.findAll()
            .then(users => res.send(users))
            .catch(error => {
                console.error(error);
                res.status(500).send({ message: 'There was a problem trying to get the user' });
            })
    },
    async signup(req,res) {
        try {
            const hash = await bcryptjs.hash(req.body.password, 9); // el 9 son las rondas de salt
            req.body.password = hash; //reescribo la contraseña por el hash obtenido
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to create the user'});
        }
    },
    async login(req,res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            const isMatch = await bcryptjs.compare(req.body.password, user.password);
            if (!isMatch) {
                throw new Error('Wrong username or password.')
            }

            const token = jwt.sign({ id: user.id }, 'patata123', { expiresIn: '2y' });
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
    },
    async delete(req,res) {
        try {
            const { id } = req.params
            const user = await User.destroy({
                where : {
                    id : id
                }
            })
            res.status(200).send({ message : 'User deleted.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem login the user.'})
        }
    } 
}

module.exports = UserController;