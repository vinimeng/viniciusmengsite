module.exports = {
    mode: 'jit',
    purge: [
        './public/index.html',
        './src/ts/**/*.ts'
    ],
    darkMode: false, // or 'media' or 'class'
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
