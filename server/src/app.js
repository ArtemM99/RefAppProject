const express = require('express');
const morgan = require('morgan');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const recipeRouter = require('./routes/recipeRouter');


const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/recipes', recipeRouter);


module.exports = app;
