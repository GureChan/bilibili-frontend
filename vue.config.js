const {defineConfig} = require('@vue/cli-service')
const {VantResolver} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭eslint检验
    configureWebpack: { // 配置vant插件
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    }
})
