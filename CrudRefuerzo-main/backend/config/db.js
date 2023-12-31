const moongose = require('mongoose');
require('dotenv').config({ path: 'variables.env' })

const conectarDB = async () => {
    try {

        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('>> Base de Datos conectada')
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;