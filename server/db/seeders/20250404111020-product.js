'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products', // Имя таблицы в базе данных (обратите внимание на регистр)
      [
        {
          name: 'Яйца',
          quantity: 10,
          expirationDate: new Date('2025-04-15'),
          image: 'https://example.com/eggs.jpg', // URL изображения
          userId: 1, // Предполагаем, что пользователь с id=1 существует
          categoryId: 1, // Предполагаем, что категория с id=1 (например, "Молочка") существует
         
        },
        {
          name: 'Яблоки',
          quantity: 5,
          expirationDate: new Date('2025-04-20'),
          image: 'https://example.com/apples.jpg', // URL изображения
          userId: 1,
          categoryId: 2, // "Фрукты"
          
        },
        {
          name: 'Морковь',
          quantity: 8,
          expirationDate: new Date('2025-05-01'),
          image: 'https://example.com/carrots.jpg',
          userId: 2, // Пользователь с id=2
          categoryId: 3, // "Овощи"
          
        },
        {
          name: 'Куриная грудка',
          quantity: 2,
          expirationDate: new Date('2025-04-10'),
          image: 'https://example.com/chicken.jpg',
          userId: 1,
          categoryId: 4, // "Мясо"
          
        },
        {
          name: 'Кола',
          quantity: 3,
          expirationDate: new Date('2025-12-31'),
          image: 'https://example.com/coke.jpg',
          userId: 2,
          categoryId: 5, // "Напитки"
         
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
