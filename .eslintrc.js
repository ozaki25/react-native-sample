module.exports = {
    'env': {
        'node': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'parser': 'babel-eslint',
    'plugins': [
      "react"
    ],
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['off'],
        'no-console': ['off'],
        'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always' }],
        'eqeqeq': ['error', 'always'],
    },
    'globals': {

    },
};
