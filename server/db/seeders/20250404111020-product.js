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
          image: 'https://example.com/eggs.jpg',
          userId: 1,
          categoryId: 1, // Молочка
        },
        {
          name: 'Молоко',
          quantity: 5,
          expirationDate: new Date('2025-04-10'),
          image: 'https://example.com/milk.jpg',
          userId: 1,
          categoryId: 1, // Молочка
        },
        {
          name: 'Сыр',
          quantity: 4,
          expirationDate: new Date('2025-06-01'),
          image: 'https://example.com/cheese.jpg',
          userId: 1,
          categoryId: 1, // Молочка
        },
        {
          name: 'Йогурт',
          quantity: 6,
          expirationDate: new Date('2025-05-01'),
          image: 'https://example.com/yogurt.jpg',
          userId: 1,
          categoryId: 1, // Молочка
        },
        {
          name: 'Куриная грудка',
          quantity: 2,
          expirationDate: new Date('2025-04-10'),
          image: 'https://example.com/chicken.jpg',
          userId: 1,
          categoryId: 4, // Мясо
        },
        {
          name: 'Говядина',
          quantity: 3,
          expirationDate: new Date('2025-06-10'),
          image: 'https://example.com/beef.jpg',
          userId: 2,
          categoryId: 4, // Мясо
        },
        {
          name: 'Творог',
          quantity: 3,
          expirationDate: new Date('2025-05-15'),
          image: 'https://example.com/cottage_cheese.jpg',
          userId: 1,
          categoryId: 1, // Молочка
        },
        {
          name: 'Шпинат',
          quantity: 1,
          expirationDate: new Date('2025-04-08'),
          image: 'https://example.com/spinach.jpg',
          userId: 2,
          categoryId: 3, // Овощи
        },
        {
          name: 'Помидоры',
          quantity: 6,
          expirationDate: new Date('2025-04-25'),
          image: 'https://example.com/tomatoes.jpg',
          userId: 2,
          categoryId: 3, // Овощи
        },
        {
          name: 'Огурцы',
          quantity: 4,
          expirationDate: new Date('2025-04-22'),
          image: 'https://example.com/cucumbers.jpg',
          userId: 1,
          categoryId: 3, // Овощи
        },
        {
          name: 'Картофель',
          quantity: 5,
          expirationDate: new Date('2025-05-10'),
          image: 'https://example.com/potatoes.jpg',
          userId: 2,
          categoryId: 3, // Овощи
        },
        {
          name: 'Авокадо',
          quantity: 3,
          expirationDate: new Date('2025-04-10'),
          image: 'https://example.com/avocado.jpg',
          userId: 1,
          categoryId: 2, // Фрукты
        },
        {
          name: 'Яблоки',
          quantity: 5,
          expirationDate: new Date('2025-04-20'),
          image: 'https://example.com/apples.jpg',
          userId: 1,
          categoryId: 2, // Фрукты
        },
        {
          name: 'Киви',
          quantity: 6,
          expirationDate: new Date('2025-04-18'),
          image: 'https://example.com/kiwi.jpg',
          userId: 2,
          categoryId: 2, // Фрукты
        },
        {
          name: 'Грибы',
          quantity: 4,
          expirationDate: new Date('2025-04-12'),
          image: 'https://example.com/mushrooms.jpg',
          userId: 1,
          categoryId: 3, // Овощи
        },
        {
          name: 'Морковь',
          quantity: 8,
          expirationDate: new Date('2025-04-25'),
          image: 'https://example.com/carrots.jpg',
          userId: 2,
          categoryId: 3, // Овощи
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
