const cookieConfig = require('../configs/cookieConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');

const tokensRoutes = require('express').Router();

tokensRoutes.get('/refresh', verifyRefreshToken, async (req, res) => {
  const { user } = res.locals;

  const { refreshToken, accessToken } = generateTokens({ user });

  return res
    .cookie('refreshToken', refreshToken, cookieConfig.refresh)
    .json({ user, accessToken });
});

module.exports = tokensRoutes;
