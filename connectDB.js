const { config } = require('process');
require('dotenv').config({ path: 'config.env' })
const mongoose = require('mongoose'); // for interacting with mongodb
const { log } = require('console');
// await db connection
const connectDB = async () => {
    try {
        const connexion = await mongoose.connect(process.env.MONGODB_CONNEXION) // MONGODB_CONNEXION => db uri
        console.log('Connection to MONGODB database OK');
        console.log(`connected to : ${connexion.connection.host}`);
        console.log(`connected to the db : ${connexion.connection.db.databaseName}`);
    } catch (error) {
        console.log(error);
    }

}
// Export for server
module.exports = connectDB