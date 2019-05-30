var path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'elements.bundle.js',
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.sass', '.scss', '.css', '.json' ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ca]ss$/,
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-modules-typescript-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'to-string-loader' },
                    { loader: 'css-modules-typescript-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                ],
            },
        ],
    },
};
