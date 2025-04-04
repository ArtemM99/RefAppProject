'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users', // Имя таблицы в базе данных (обратите внимание на регистр)
      [
        {
          name: 'Алексей',
          email: 'alexey@example.com',
          password: 'hashed_password_1', // В реальном приложении здесь должен быть хэш пароля (например, bcrypt)
          
        },
        {
          name: 'Мария',
          email: 'maria@example.com',
          password: 'hashed_password_2',
          
        },
        {
          name: 'Иван',
          email: 'ivan@example.com',
          password: 'hashed_password_3',
        
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
