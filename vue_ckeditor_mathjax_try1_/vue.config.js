process.env.VUE_APP_STATIC_URL="http://localhost:8082/";
module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    css: {
        sourceMap: true
    }
};
