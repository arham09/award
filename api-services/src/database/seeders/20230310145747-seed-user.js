module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'dummy1@mail.com',
          full_name: 'Setiawan',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'dummy2@mail.com',
          full_name: 'Setiaji',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    ),
  down: async queryInterface => {
    await queryInterface.bulkDelete('users', {});
  },
};
