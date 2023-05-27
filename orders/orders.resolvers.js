const ordersModel = require("./orders.model")


module.exports = {
    Query: {
        orders: () => {
            return ordersModel.getAllOrders()
        }
    }
}


// ! resolver files shoild be as small as possible