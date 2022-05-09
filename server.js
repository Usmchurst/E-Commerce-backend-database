const express = require('express');
const routes = require('./routes');
// import sequelize connection
const Category = require('../models/Category');
const Product = require('../models/Product');
const Product = require('../models/ProductTag');
const Product = require('../models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
