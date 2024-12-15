export default (sequelize, dataType) => {
  const SearchLog = sequelize.define(
    "SearchLog",
    {
      userId: {
        type: dataType.INTEGER,
        allowNull: false,
      },
      cityName: {
        type: dataType.STRING,
        allowNull: false,
      },
      weatherInfo: {
        type: dataType.JSON,
        allowNull: false,
      },
    },
    {
      tableName: "SearchLog",
    }
  );

  return SearchLog;
};
