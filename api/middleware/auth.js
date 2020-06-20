const jwt = require('jsonwebtoken');
const { User, Token } = require('../models');

const auth = async(req, res, next) => {
    try {
        // token on headers.authorization
        const token = req.headers.authorization;
        // payload from token and secret
        const payload = jwt.verify(token, 'patata123');
        // user id from primary key
        const user = await User.findByPk(payload.id);
        // search token
        const tokenFound = await Token.findOne({ 
            where: {
                token: token,
                UserId: payload.id,
                revoked: false
            }
        })
        // token not found
        if (!user || !tokenFound) {
            return res.status(401).send({ message: 'You are not authorized'})
        }
        req.user = user;
        next()
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'You are not authorized', error})
    }
}

module.exports = auth;