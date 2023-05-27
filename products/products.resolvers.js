const productsModel = require("./products.model")

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max)
        },
        product: (_, args) => {
            return productsModel.getProductByID(args.id)
        },
    },

    Mutation: {
        addNewProduct: (_, args) => {
            console.log(args);
            return productsModel.addNewProduct(args.id, args.description, args.price)
        },
        addNewProductReview: (_, args) => {
            return productsModel.addNewProductReview(args.id, args.rating, args.comment)
        }
    }
}


// ! resolver files shoild be as small as possible
