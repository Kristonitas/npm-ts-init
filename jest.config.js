module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  preset: "ts-jest",
  transform: {
    "^.+\\.ts$": "ts-jest"
  },

  moduleDirectories: ["node_modules"],
  verbose: false,
  moduleFileExtensions: ["ts", "js", "json", "node"]
};
