module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(?<repo>[a-z-]+)\]-(?<issue>\d+): (?<subject>.*)$/,
      headerCorrespondence: ['repo', 'issue', 'subject'],
    },
  },
  rules: {
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'header-max-length': [2, 'always', 100],
  },
};
