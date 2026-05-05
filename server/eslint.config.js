module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
      globals: {
        require: "readonly",
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
        console: "readonly"
      }
    }
  }
];