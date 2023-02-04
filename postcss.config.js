module.exports = (ctx) => ({
    plugins: [
        require('postcss-import'),
        ctx.env === 'production' ? require('tailwindcss/nesting') : null,
        require('tailwindcss'),
        ctx.env === 'production' ? require('autoprefixer') : null,
    ]
})
