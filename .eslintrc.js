module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:react-native/all"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 
    "react-native"   
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-use-before-define": ["error", { "functions": true, "classes": true, "variables": false}],
    "react/prop-types": [1],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],      
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 1,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,    
  },  
  
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
  }
};
