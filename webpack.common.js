const path = require("path");

// Configuration
const entry = {
  tcl: "./src/index.ts"
};
const outdir = "./lib";

// Module
module.exports = {
  entry,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    path: path.resolve(__dirname, outdir)
  }
};
