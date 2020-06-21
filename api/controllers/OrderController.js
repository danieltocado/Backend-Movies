const { Order } = require('../models')
const OrderController = {
    create(req,res) {
        Order.create(req.body)
            .then(order => {
                res.status(200).send(order)
            })
            .catch( error => {
                console.log(error)
                res.status(500).send({ message : 'There was a problem creating the order.'})
            })
    },
    async getAllOrders(req,res) {
        try {
            const orders = await Order.findAll()
            res.status(200).send(orders)
            
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'There was a problem trying to get the orders.'})
        }
    }
}
module.exports = OrderController;