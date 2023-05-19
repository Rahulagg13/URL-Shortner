const mongoose = require("mongoose");

async function connectToMongo(db) {
  await mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Database is successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectToMongo };
