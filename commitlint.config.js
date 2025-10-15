module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [2, 'always', /^\[dehome-ui\]-\d+: .+$/],
    'header-message': [
      2,
      'always',
      'Commit message phải theo format: [dehome-ui]-<issue_number>: <description>',
    ],
  },
};
