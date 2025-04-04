const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyAccessToken(req, res, next) {
  try {
    // Bearer <token>
    const accessToken = req.headers.authorization.split(' ')[1];
    console.log(accessToken);
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;
    next();
  } catch (error) {
    console.error('Error verifying access token');
    res.status(403).json({ text: 'invalid access token' });
  }
}

module.exports = verifyAccessToken;