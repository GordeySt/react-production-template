export const buildSvgLoaders = () => {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
};
