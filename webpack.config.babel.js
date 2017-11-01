import { join } from 'path';

const includePath = join(__dirname, 'source');

export default {
    entry: './source/index.js',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'randomQuotes'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            include: includePath
        }, {
            test: /\.json$/,
            use: 'json-loader',
            include: includePath
        }]
    }
};
