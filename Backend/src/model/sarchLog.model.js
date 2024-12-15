export default (sequelize, dataType) => {
  const SearchLog = sequelize.define(
    "SearchLog",
    {
      userId: {
        type: dataType.INTEGER,
        allowNull: false,
      },
      city: {
        type: dataType.STRING,
        allowNull: false,
      },
      weatherInfo: {
        type: dataType.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "SearchLog",
    }
  );

  return SearchLog;
};
