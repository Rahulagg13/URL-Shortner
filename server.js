// ALl server connection related
require("dotenv").config({ path: `./config.env` });
const app = require("./app");

const connection = require("./connection/connection");

connection.connectToMongo(process.env.DB);
//create a server on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App successfully launched on the port ${port}...`);
});
