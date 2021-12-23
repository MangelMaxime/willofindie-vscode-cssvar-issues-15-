module.exports = {
    plugins: [
        require('postcss-import-ext-glob'),
        require('postcss-import'),
        require('postcss-nesting'),
        require('postcss-preset-env')
    ]
}
