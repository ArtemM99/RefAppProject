const authRoutes = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../utils/generateTokens');
const cookieConfig = require('../configs/cookieConfig');

authRoutes.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
console.log(req.body);
    if (!name || !email || !password) {
      return res.status(400).json({ text: 'Неверные данные' });
    }

    const hashpass = await bcrypt.hash(password, 10);

    const user = (await User.create({ name, email, hashpass })).get();

    delete user.hashpass;

    const { refreshToken, accessToken } = generateTokens({ user });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig.refresh)
      .json({ user, accessToken });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ text: 'internal server error', message: error.message });
  }
});

authRoutes.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ text: 'Заполните все поля' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ text: 'Неверный логин или пароль' });
    }

    const isCorrect = await bcrypt.compare(password, user.hashpass);

    if (!isCorrect) {
      return res.status(400).json({ text: 'Неверный логин или пароль' });
    }

    const plainUser = user.get();

    delete plainUser.hashpass;

    const { refreshToken, accessToken } = generateTokens({ user: plainUser });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig.refresh)
      .json({ user: plainUser, accessToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ text: 'Ошибка сервера', message: error.message });
  }
});

authRoutes.get('/logout', async (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

module.exports = authRoutes;
