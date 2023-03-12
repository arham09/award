module.exports = {
  up: async queryInterface =>
    queryInterface.bulkInsert(
      'awards',
      [
        {
          type_id: 1,
          name: 'Vouchers Bersama',
          point: 1000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 1,
          name: 'Vouchers Sendiri',
          point: 5000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 3,
          name: 'Giftcard Membership',
          point: 1000000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 3,
          name: 'Giftcard 1 year',
          point: 1000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 2,
          name: 'Buy 1 Get 1',
          point: 7000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 2,
          name: 'Buy 2 Get 1',
          point: 1000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          type_id: 3,
          name: 'Giftcard For Payday',
          point: 1000,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVjfjJsjkFdxE025FHzyUfRje2d7oB-NYuw&usqp=CAU',
          status: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    ),
  down: async queryInterface => {
    await queryInterface.bulkDelete('awards', {});
  },
};
