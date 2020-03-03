module.exports = {
    entry: __dirname + '/app/App.js', /* FICHERO DE ENTRADA BASE DONDE SE INICIA REACT */
    output: {
        path: __dirname + '/public/', /* DIRECTORIO DONDE SE CREA EL BUNDLE */
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8008,
        publicPath: '/public/' /* DONDE WEBPACK-DEV-SERVER BUSCA EL BUNDLE PARA EL SERVIDOR */
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', /* INSTALAR ESTE MÓDULO CON NPM PARA LA TRANSPILACIÓN NECESARIA DE REACT CON BABEL*/
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] /* INSTALAR ESTOS MÓDULOS CON NPM PARA LA TRANSPILACIÓN NECESARIA DE REACT CON BABEL*/
                    }
                }
            }
        ]
    }
}


/* PLANTILLA BÁSICA DE WEBPACK PREPARADA PARA REACT CON BABEL Y WEBPACK-DEV-SERVER */