'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Recipes', // Имя таблицы в базе данных (обратите внимание на регистр)
      [
        {
          title: 'Омлет с сыром',
          ingredients: 'яйца: 3, сыр: 50г, молоко: 100мл',
          instructions:
            'Взбить яйца с молоком, добавить тертый сыр, жарить на сковороде 5 минут.',
          userId: 1, // Предполагаем, что пользователь с id=1 существует
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Фруктовый салат',
          ingredients: 'яблоки: 2, бананы: 1, йогурт: 150г',
          instructions: 'Нарезать фрукты, смешать с йогуртом, подавать охлажденным.',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Жареная курица',
          ingredients: 'куриная грудка: 200г, соль: по вкусу, перец: по вкусу',
          instructions:
            'Приправить курицу солью и перцем, жарить на сковороде 10 минут с каждой стороны.',
          userId: 2, // Пользователь с id=2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Морковный суп',
          ingredients: 'морковь: 3, лук: 1, вода: 500мл',
          instructions: 'Нарезать овощи, варить в воде 20 минут, измельчить блендером.',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Лимонад',
          ingredients: 'лимон: 1, сахар: 50г, вода: 300мл',
          instructions: 'Выжать сок лимона, смешать с сахаром и водой, охладить.',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
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
