const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@common': path.resolve(__dirname, 'src/components/common/'),
            '@ui': path.resolve(__dirname, 'src/components/ui/'),
            '@pages': path.resolve(__dirname, 'src/components/pages/'),
            '@layouts': path.resolve(__dirname, 'src/layouts/'),
        },
    },
};