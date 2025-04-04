'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories', // Имя таблицы в базе данных (обратите внимание на регистр)
      [
        {
          title: 'Молочка',
          emoji: '🥛',
          userId: 1, // Предполагаем, что пользователь с id=1 существует
          createdAt: new Date(),
        },
        {
          title: 'Фрукты',
          emoji: '🍎',
          userId: 1,
          createdAt: new Date(),
        },
        {
          title: 'Овощи',
          emoji: '🥕',
          userId: 2, // Предполагаем, что пользователь с id=2 существует
          createdAt: new Date(),
        },
        {
          title: 'Мясо',
          emoji: '🍖',
          userId: 3, // Глобальная категория (без привязки к пользователю)
          createdAt: new Date(),
        },
        {
          title: 'Напитки',
          emoji: '🥤',
          userId: 1,
          createdAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
