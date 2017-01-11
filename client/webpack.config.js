module.exports = {
    entry: ['whatwg-fetch', "./client.tsx"],
    output: {
        filename: "bundle.js",
        path: "dist"
    },

    // Enable source maps.
    devtool: "source-map",

    // Detect TypeScript extensions.
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },

    // Plugins for TypeScript and source maps.
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // Keep React dependencies as external modules.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
