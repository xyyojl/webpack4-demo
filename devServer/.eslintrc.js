module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        document: false
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "react/self-closing-comp": 0
    }
};