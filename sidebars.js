module.exports = {
  frontend: {
    'Frontend': ['frontend/overview'],
  },
  backend: {
    'Backend': ['backend/overview'],
  },
  packages: {
    Packages: [
      'packages/overview',
      {
        '@warsawlo/points-calculator': [
          'packages/@warsawlo__points-calculator/overview',
          'packages/@warsawlo__points-calculator/getting-started',
          'packages/@warsawlo__points-calculator/configs',
          {
            'Utils': [
              'packages/@warsawlo__points-calculator/validators',
              'packages/@warsawlo__points-calculator/initial-data',
            ]
          },
          {
            'API Reference': [
              'packages/@warsawlo__points-calculator/api-reference/PointsCalculator',
              'packages/@warsawlo__points-calculator/api-reference/interfaces'
            ]
          },
          'packages/@warsawlo__points-calculator/v1-docs',
          'packages/@warsawlo__points-calculator/changelog',
        ],
        '@warsawlo/edu-establishments': [
          'packages/@warsawlo__edu-establishments/overview',
        ],
        '@warsawlo/lava': [
          'packages/@warsawlo__lava/overview',
        ]
      }
    ],
  },
};
