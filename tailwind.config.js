module.exports = {
    darkMode: 'class',
    mode: 'jit',
    content: ['./src/**/*.{html,ts,scss}'],
    theme: {
        color: {
            green: '#31c48d',
            red: '#ff0054',
            orange: '#ff7b00',
            yellow: '#ffbd00',
            purple: '#cd418d',
            violet: '#7856fc',
            blue: '#258eea'
        },
        extend: {
            boxShadow: {
                cus: '4px 9px 20px rgb(0 0 0 / 26%)'
            }
        }
    },
    plugins: []
};
