module.exports = {
  "ignorePatterns": [".eslintrc.cjs"],
  "extends": "./tsconfig.json",
  "env": {
    "es2021": true,
    "node": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "never"],
    "@typescript-eslint/space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  }
}
