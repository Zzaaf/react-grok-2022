module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Cities', [
      {
        title: 'Moskow',
        founded: 1147,
        area: 2562,
        officialLanguage: 'russian',
        population: 12635466,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
