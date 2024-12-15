export default (sequelize, dataType) => {
  const user = sequelize.define(
    "Users",
    {
      Name: {
        type: dataType.STRING,
        allowNull: false,
      },
      Password: {
        type: dataType.STRING,
        allowNull: false,
      },
      Email: {
        type: dataType.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "Users",
    }
  );

  return user;
};
