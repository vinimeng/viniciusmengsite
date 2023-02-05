module.exports = {
    mode: 'jit',
    content: [
        './public/index.html',
        './src/ts/**/*.ts'
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '1.25rem',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
