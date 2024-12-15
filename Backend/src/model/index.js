import Sequelize from "sequelize";
import Users from './user.model.js'

const sequelizeInstance = new Sequelize(
  "aasa-technologies-assignment",
  "chandan",
  "chandan083",

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
