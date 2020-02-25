const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    //In order to exclude node_modules and native node libraries from bundling. See: https://stackoverflow.com/questions/33001237/webpack-not-excluding-node-modules
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    devtool: "inline-source-map",
    // devtool: "source-map",
    // node: { fs: 'empty', net: 'empty', uws: 'empty' },//socket.io (for node but wrongly used in client?) bug fix ???
    entry: './src-server/server-ts.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,//match both .ts and .tsx
                // use: 'ts-loader',
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                include: [
                    path.resolve(__dirname, "src-server")
                ],
                exclude: [
                    /*/node_modules/,
                    /public/,
                    /views/,
                    /7zips/,*/
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "public"),
                    path.resolve(__dirname, "view"),
                    path.resolve(__dirname, "7zips"),
                ]
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],// what is this ?
    },
};
