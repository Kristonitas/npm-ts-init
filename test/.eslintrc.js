const config = require("../src/.eslintrc");

config.plugins.push("jest");
config.extends.push("plugin:jest/recommended");

module.exports = config;
