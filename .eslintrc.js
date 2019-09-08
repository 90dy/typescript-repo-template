module.exports = {
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  "parserOptions": {
    // set to 3, 5 (default), 6, 7, 8, 9, 10 or 11 to specify the version of
    // ECMAScript syntax you want to use
    "ecmaVersion": 11,
    // set to "script" (default) or "module" if your code is in ECMAScript module
    "sourceType": "module",
    // an object indicating which additional language features you’d like to use
    "ecmaFeatures": {
      // allow return statements in the global scope
      "globalReturn": false,
      // enable global strict mode (if ecmaVersion is 5 or greater)
      "impliedStrict": true,
      // enable JSX
      "jsx": true,
    },
    // add global variable from
    "env": {
      "browser": false,
      "node": true,
      "commonjs": false,
      "shared-node-browser": true,
      "es6": true,
      "worker": true,
      "mocha": false,
      "jasmine": false,
      "phantomjs": false,
      "protractor": false,
      "qunit": false,
      "jquery": false,
      "prototypejs": false,
      "shelljs": false,
      "meteor": false,
      "mongo": false,
      "applescript": false,
      "nashorn": false,
      "serviceworker": true,
      "atomtest": false,
      "embertest": false,
      "webextensions": false,
      "greasemonkey": false,
    },
  },
  "parser": "babel-eslint",
  "extends": [
    'standard',
    'prettier',
    'prettier/standard',
    'prettier/react',
    'plugin:react/recommended',
  ],
  "plugins": [
    "prettier",
    "standard",
    "react",
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  "rules": {
    'camelcase': 0,
    'semi': 2,
    'eqeqeq': 2,
    'indent': [2, 2],
    'no-unused-vars': 2,
    'comma-dangle': [2, 'always-multiline'],
    "no-multi-spaces": 2,
    'padded-block': 0,
    'no-console': 0,
   'react/jsx-indent': [2, 2],
    'react/no-unused-prop-types': 2,
  },
  "overrides": [
    {
      "files": ['*.ts', '*.tsx'],
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "@typescript-eslint/eslint-plugin",
        "prettier",
        "standard",
        "react",
      ],
      "rules": {
        "no-dupe-class-members": 0,
        "import/export": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": 2,
      }
    },
    {
      "files": ['*.d.ts'],
      "rules": {
        "no-useless-constructor": 0,
      }
    },
    {
      "files": ['*_pb*.js', '*_pb*.d.ts'],
      "rules": {
        "no-new-func": 0,
        "no-unused-vars": 0,
        "no-redeclare": 0,
        "no-undef-init": 0,
        "no-use-before-define": 0,
        "@typescript-eslint/no-unused-vars": 0,
      },
      "globals": {
        "proto": 'readonly',
        "COMPILED": 'readonly',
      },
    }
  ],
}


// const default = {
//   extends: [
//     'eslint:recommended',
//     // 'standard',
//     // 'prettier',
//     // 'prettier/react',
//     // 'plugin:react/recommended',
//   ],
//   parser: 'babel-eslint',
//   // parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     sourceType: 'module',
//   },
//   env: {
//     'browser': true,
//     'es6': true,
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   plugins: [
//     'babel',
//     // 'react',
//     // 'prettier',
//     // 'standard',
//     '@typescript-eslint/eslint-plugin'
//   ],
//   rules: {

//     // 'react/jsx-indent': [2, 2],
//     // 'react/no-unused-prop-types': 2,
//     // "babel/new-cap": 1,
//     // "babel/camelcase": 0,
//     // "babel/no-invalid-this": 1,
//     // "babel/object-curly-spacing": 1,
//     // "babel/quotes": 1,
//     // "babel/semi": 0,
//     // "babel/no-unused-expressions": 1,
//     // "babel/valid-typeof": 1
//     // "dependencies/no-cycles": 2,
//     // "dependencies/no-unresolved": 2,
//     // 'require-jsdoc': 1,
//   },
//   globals: {

//   },
//   // You can get rid of the no-undef errors for types and interfaces by using the
//   // following overrides. tsc still fails at non-standard syntax but we can at least
//   // hide all the false positives in ESLint for types and interfaces:
// };
