import db from "../model/index.js";
import handler from "../util/handler.js";

const Search = async (req, res) => {
  try {
    const { City } = req.body;
    if (!City) return handler.handleError(res, 409, "City name is required");
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${City}`;
    const data = await fetch(apiUrl);
    const weatherData = await data.json();
    if (!weatherData) {
      return handler.handleError(res, 404, "Wether not found");
    }
    const insertDb = await db.SearchLog.create({
        userId:req.user.id,
        cityName: City,
        weatherInfo:weatherData?.location
      });
    if (insertDb) {
        return handler.handleSuccess(
          res,
          200,
          "log add Successfully...",
          weatherData
        );
        
    }
    handler.handleError(res, 400, "log add failed....");
  } catch (error) {
    console.log(error);
    return handler.handleInternalServerError(res, 500);
  }
};

export default {
  Search,
};
