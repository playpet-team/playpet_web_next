/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withPlugins([
    [withImages, withCSS],
    {
        distDir: 'build',
        target: 'server',
        images: {
            domains: ['d2v80xjmx68n4w.cloudfront.net'],
        },
        webpack: (config, options) => {
            const { isServer } = options;

            if (!options.defaultLoaders) {
                throw new Error(
                    'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
                );
            }

            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 8192,
                            fallback: require.resolve('file-loader'),
                            outputPath: `${
                                isServer ? '../' : ''
                            }static/chunks/fonts/`,
                            name: '[name]-[hash].[ext]',
                        },
                    },
                ],
            });

            // react-hook-form 사용 시 ie11 전용 빌드 버전으로 사용하도록 설정함
            config.resolve.alias['react-hook-form'] =
                'react-hook-form/dist/index.ie11';

            return config;
        },
    },
]);
