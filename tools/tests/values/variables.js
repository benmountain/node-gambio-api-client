const variables = {
  strings: {
    empty: '',
    minimal: 'John',
    maximal: 'abc'.repeat(999),
  },

  booleans: {
    truthy: true,
    falsy: false,
  },

  numbers: {
    negative: -999,
    positive: 999,
    empty: 0,
    infinity: Infinity,
    minimal: Number.MIN_SAFE_INTEGER,
    maximal: Number.MAX_SAFE_INTEGER,
  },

  objects: {
    empty: {},
    minimal: { name: 'John Doe' },
  },

  arrays: {
    empty: [],
    minimal: [1, 2, 3],
  },
};

export { variables };
