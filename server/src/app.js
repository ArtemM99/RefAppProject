const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const recipeRouter = require('./routes/recipeRouter');
const authRoutes = require('./routes/authRouter');
const tokensRoutes = require('./routes/tokensRouter');

const app = express();

app.use(cookieParser());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tokens', tokensRoutes);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/recipes', recipeRouter);

module.exports = app;
