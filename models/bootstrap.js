const sequelize = require('./../util/database')

const product = require('./../models/product')
const user = require('./../models/user')
const cart = require('./../models/cart')
const order = require('./../models/order')

//export models
const Product = product();
const User = user();
const Cart = cart();
const Order = order();

exports.Product = Product;
exports.User = User;
exports.Cart = Cart;
exports.Order = Order;

//make relationships many to many
/* relatin between User and Cart
* a user has many cart
*/
User.hasMany(Cart);
Cart.belongsTo(User);

/* relatin between Cart and User
*  a cart belogs to one
*/
User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Cart);
Cart.belongsTo(Product);

Product.hasMany(Order);
Order.belongsTo(Product);
