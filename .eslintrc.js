module.exports = {
  'root': true,
  'env': {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    'google',
  ],
  'parserOptions': {
    parser: 'babel-eslint',
  },
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['error', 2],
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
  },
};
