const Models = require('./../models/bootstrap');
const Product = Models.Product

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.getEditProduct = (req, res, next) => {
  Product.findOne({ where: { id: req.params.id } }).then(product => {
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      product: product,
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });

  }).catch(err => {
    console.log(err)
  })
};

exports.postEditProduct = (req, res, next) => {
  //insert data into database
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.findOne({ where: { id: id } }).then(product => {
    product.update({ title, imageUrl, description, price })
      .then(data => {
        res.redirect('/');
      })
      .catch(error => {
        console.log(error)
      })

  }).catch(error => {
    console.log(error)
  })
};

exports.postDeleteProduct = (req, res, next) => {
  //insert data into database
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  Product.findOne({ where: { id: id } }).then(product => {
    product.destroy()
      .then(data => {
        res.redirect('/admin/products');
      })
      .catch(error => {
        console.log(error)
      })

  }).catch(error => {
    console.log(error)
  })
};

exports.postAddProduct = (req, res, next) => {
  //insert data into database
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({ title, imageUrl, description, price })
    .then(data => {
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
    })
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
