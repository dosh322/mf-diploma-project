const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies; // TODO: Check if it's really needed

module.exports = {
  entry: './src/bootstrap.tsx',
  output: {
    publicPath: "http://localhost:30001/",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 30001,
    historyApiFallback: true, // to redirect to / path when reloading page
  },
  cache: { type: "filesystem" },
  module: {
    rules: [
        {
            test: /\.m?js/,
            type: "javascript/auto",
            resolve: {
                fullySpecified: false, // do not add extensions on import
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
        name: "Navbar",
        library: { type: "var", name: "Navbar" },
        filename: "remoteEntry.js",
        remotes: {
          UserMenu: "UserMenu",
          Search: "Search",
        },
        exposes: {
          ".":"./src/Navbar" // ключ - название папки в либе, велью - путь к исполняемому файлу
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": { singleton: true, eager: true, requiredVersion: deps["react-dom"] },
          "@mui/material": { singleton: true, eager: true, requiredVersion: deps["@mui/material"] },
          "@emotion/react": { singleton: true, eager: true, requiredVersion: deps["@emotion/react"] },
          "@emotion/styled": { singleton: true, eager: true, requiredVersion: deps["@emotion/styled"] },
          "react-router-dom": { singleton: true, eager: true, requiredVersion: deps["react-router-dom"] },
          // TODO: TRY TO REMOTE BOOTSTRAP.JS, NOT COMPONENT
        },
      }),
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        UserMenuRemoteEntry: "http://localhost:30002/remoteEntry.js",
        SearchRemoteEntry: "http://localhost:30004/remoteEntry.js",
      }),
  ]
};