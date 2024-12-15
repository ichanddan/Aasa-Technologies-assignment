import Sequelize from "sequelize";
import Users from "./user.model.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from.env file

const sequelizeInstance = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    timezone: "+05:30",
    pool: {
      min: 0,
      max: 100,
      acquire: 5000,
      idle: 1000, // corrected from "Idle" to "idle"
    },
  }
);

const db = {};

// Authenticate the database connection
sequelizeInstance
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

db.User = Users(sequelizeInstance, Sequelize);

export default db;
