require('dotenv').config({ path: 'config.env' })
const express = require('express'); // for server creation
const routes = require('./routes.js'); // importing our routes
const connectDB = require('./connectDB.js');
const PORT = process.env.PORT; // importing our port config
const app = express(); // storing our express function for usability




//(4) telling the server that the data sent would de of JSON type
app.use(express.json())
// (1)
app.use('/', routes) // express use starts with the root ('/') then takes other routes stored in routes
// (3)
connectDB();





//(2)
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);
})