const path = require("path")

module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
//   webpack: {
//     alias: {
//         '@app': path.resolve(__dirname, "src/"),
//         '@components': path.resolve(__dirname, "src/components/"),
//         '@images': path.resolve(__dirname, "src/images/"),
//         '@containers': path.resolve(__dirname, "src/containers/"),
//         '@utils': path.resolve(__dirname, "src/utils/"),
//     }
// },
}
