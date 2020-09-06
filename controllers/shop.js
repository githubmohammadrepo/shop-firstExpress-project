const models = require('./../models/bootstrap');
const Bootstrap = require('../util/database');
const Models = require('./../models/bootstrap');
const { QueryTypes } = require('sequelize');
const sequelize = require('./../util/database')

const Product = Models.Product
const User = Models.User
const Cart = Models.Cart
const Order = Models.Order
// const bootstrapModels = require('./../models/bootstrap');
// bootstrapModels();

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products',
      userId: 93
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  let userId = 93;
  Cart.findAll({ include: [User, Product] }).then(products => {
    let total = products.map(element => {
      return element.dataValues.product.price * element.dataValues.qty;
    });
    res.render('shop/cart', {
      path: '/cart',
      products: products,
      pageTitle: 'Your Cart',
      totalPrice: Math.round(total.reduce((a, b) => a + b) * 100) / 100
      
    });
  }).catch(error => {
    res.render('shop/cart', {
      path: '/cart',
      products: [],
      pageTitle: 'Your Cart',
      totalPrice: 0
      
    });
  })
};

exports.getOrders = (req, res, next) => {
  let userId = 93;
  Order.findAll({ include: [User, Product] }).then(products => {
    let total = products.map(element => {
      return element.dataValues.product.price * element.dataValues.qty;
    });
    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders',
      products: products,
      totalPrice: Math.round(total.reduce((a, b) => a + b) * 100) / 100
      
    });
  }).catch(error => {
    res.render('shop/cart', {
      path: '/cart',
      products: [],
      pageTitle: 'Your Cart',
      totalPrice: 0
      
    });
  })
};
exports.getAddCheckout = (req, res, next) => {
  let userId = req.body.userId;
  console.log(userId)
  setTimeout(() => {
    sequelize.query(`INSERT INTO orders SELECT * FROM carts where userId= $1`,
      {
        bind: [userId],
        type: QueryTypes.INSERT
      }).then(result => {
        //remove carts info
        sequelize.query(`DELETE FROM carts where userId= $1`,
          {
            bind: [userId],
            type: QueryTypes.DELETE
          }).then(result => {
            res.redirect('/checkout');
          }).catch(error => {
            res.redirect('/cart')
          })
      }).catch(error=> {
        res.redirect('/cart')
      }), 
    5000});
  };


exports.getCheckout = (req, res, next) => {
  let userId = 93;
  Order.findAll({ include: [User, Product] }).then(products => {
    let total = products.map(element => {
      return element.dataValues.product.price * element.dataValues.qty;
    });
    res.render('shop/checkout', {
      path: '/checkout',
      products: products,
      pageTitle: 'Your checkout',
      totalPrice: Math.round(total.reduce((a, b) => a + b) * 100) / 100
      
    });
  }).catch(error => {
    console.log(error)
  })

};

  exports.getAddToCart = (req, res, next) => {
    let userId = req.body.userId;
    let productId = req.params.productId;
    console.log(productId)
    //create user
    if (userId && productId) {
      //if exist add qty
      Cart.findOne({ where: { productId: productId } })
        .then(product => {
          console.log(product.dataValues)
          product.update({ qty: product.dataValues.qty + 1 })
        }).catch(error => {
          Cart.create({
            qty: 1,
            productId: productId,
            userId: userId,
          }, {
            include: [User]
          });
          console.log('error findProduct ' + error)

          console.log(error)
        })
    } else {
      throw new Error('some thing went wrong mohammad')
    }
    res.redirect('/');
  };
