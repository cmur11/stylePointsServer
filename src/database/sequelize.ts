const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./database.sqlite",
// });

const sequelize = new Sequelize("sqlite::memory:");

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectToDatabase();
