const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies; // TODO: Check if it's really needed

module.exports = {
  entry: './src/bootstrap.tsx',
  output: {
    publicPath: "http://localhost:30004/",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 30004,
    historyApiFallback: true, // to redirect to / path when reloading page
  },
  cache: { type: "filesystem" },
  module: {
    rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
                fullySpecified: false,
            },
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        { test: /\.json$/, type: 'json' },
        {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
        },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
        name: "Search",
        library: { type: "var", name: "Search" }, 
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
          ".":"./src/Search" 
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
          "@mui/material": { singleton: true, eager: true, requiredVersion: deps["@mui/material"] },
          "@emotion/react": { singleton: true, eager: true, requiredVersion: deps["@emotion/react"] },
          "@emotion/styled": { singleton: true, eager: true, requiredVersion: deps["@emotion/styled"] },
          "react-router-dom": { singleton: true, eager: true, requiredVersion: deps["react-router-dom"] },
        },
      }),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
  ]
};