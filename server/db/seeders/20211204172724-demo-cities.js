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
      {
        title: 'Oslo',
        founded: 1048,
        area: 454,
        officialLanguage: 'norwegian',
        population: 673469,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'London',
        founded: 47,
        area: 1572,
        officialLanguage: 'english',
        population: 8961989,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Helsinki',
        founded: 1550,
        area: 213,
        officialLanguage: 'finnish',
        population: 656611,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dublin',
        founded: 841,
        area: 318,
        officialLanguage: 'irish',
        population: 1173179,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Minsk',
        founded: 1068,
        area: 409,
        officialLanguage: 'belarusian',
        population: 1996553,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Amsterdam',
        founded: 1300,
        area: 219,
        officialLanguage: 'dutch',
        population: 872757,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Berlin',
        founded: 1237,
        area: 891,
        officialLanguage: 'deutsch',
        population: 3664088,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Brussel',
        founded: 966,
        area: 32,
        officialLanguage: 'dutch',
        population: 185103,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Warsaw',
        founded: 1300,
        area: 517,
        officialLanguage: 'polish',
        population: 1792692,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vienna',
        founded: 881,
        area: 414,
        officialLanguage: 'polish',
        population: 1792692,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kyiv',
        founded: 482,
        area: 826,
        officialLanguage: 'ukrainian',
        population: 2954564,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Prague',
        founded: 880,
        area: 496,
        officialLanguage: 'czech',
        population: 1331598,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Stockholm',
        founded: 1187,
        area: 188,
        officialLanguage: 'swedish',
        population: 2352549,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Reykjavík',
        founded: 874,
        area: 274,
        officialLanguage: 'icelandic',
        population: 134010,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Riga',
        founded: 1201,
        area: 304,
        officialLanguage: 'latvian',
        population: 614618,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Luxembourg',
        founded: 963,
        area: 51,
        officialLanguage: 'deutsch',
        population: 128512,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Madrid',
        founded: 852,
        area: 607,
        officialLanguage: 'spanish',
        population: 3266126,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bern',
        founded: 1191,
        area: 51,
        officialLanguage: 'deutsch',
        population: 134727,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Budapest',
        founded: 1873,
        area: 525,
        officialLanguage: 'hungarian',
        population: 1723836,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Sofia',
        founded: 681,
        area: 492,
        officialLanguage: 'bulgarian',
        population: 1276434,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Vilnius',
        founded: 1323,
        area: 401,
        officialLanguage: 'lithuanian',
        population: 592389,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tallinn',
        founded: 1154,
        area: 159,
        officialLanguage: 'estonian',
        population: 444560,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ljubljana',
        founded: 1144,
        area: 163,
        officialLanguage: 'slovene',
        population: 284355,
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Copenhagen',
        founded: 1167,
        area: 86,
        officialLanguage: 'danish',
        population: 615993,
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
