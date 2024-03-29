// eslint-disable-next-line @typescript-eslint/no-var-requires
const wp = require('@cypress/webpack-preprocessor')

const webpackOptions = {
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
}

const options = {
    webpackOptions,
}

module.exports = wp(options)
