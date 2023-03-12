module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'types',
      [
        {
          code: 1,
          name: 'Vouchers',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code: 2,
          name: 'Products',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          code: 3,
          name: 'Giftcard',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    ),
  down: async queryInterface => {
    await queryInterface.bulkDelete('types', {});
  },
};
