const user = require('./../models/users')
const User = user();

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
  User.findOne({ where: { id: req.params.id } }).then(product => {
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

  User.findOne({ where: { id: id } }).then(product => {
    product.update({ title, imageUrl, description, price })
      .then(data => {
        console.log(data)
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

  User.findOne({ where: { id: id } }).then(product => {
    product.destroy()
      .then(data => {
        console.log(data)
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
  User.create({ title, imageUrl, description, price })
    .then(data => {
      console.log(data)
      res.redirect('/');
    })
    .catch(error => {
      console.log(error)
    })
};

exports.getProducts = (req, res, next) => {
  User.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
