import { useEffect, useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { handelGetWeatherData, handelSearchCity } from "../Api";
import { toast } from "react-toastify";

export default function WeatherSearch() {
  const [city, setCity] = useState({ City: "" });
  const [weather, setWeather] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCity((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const SearchWeather = await handelSearchCity(city);
      console.log(SearchWeather.data.data);
      setWeather(SearchWeather.data.data);
      if (SearchWeather.status == 200) {
        toast.success("your weather");
      } else if (SearchWeather.status == 215) {
        toast.error(SearchWeather.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const [weatherHistory, setweatherHistory] = useState([]);
  const getData = localStorage.getItem("data");
  const parsedData = JSON.parse(getData);

  useEffect(() => {
    const fetchWeatherHistory = async () => {
      const res = await handelGetWeatherData();
      const parsedData = res.data.data.map((item) => JSON.parse(item));
      setweatherHistory(parsedData);
    };
    fetchWeatherHistory();
  }, []);

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="text"
          id="City"
          onChange={handleChange}
          placeholder="Enter city name"
          className="flex-grow"
        />
        <Button color="primary" type="submit">
          Search
        </Button>
      </form>
      {weather && (
        <Card className="mt-5">
          <CardHeader>
            <div className="flex gap-2">
              <h2 className="text-xl font-bold">
                {weather?.location?.name} - {weather?.location?.region} -{" "}
                {weather?.location?.country}
              </h2>
              <img
                className="rounded-xl"
                src={weather?.current?.weather_icons[0]}
                height="18"
                width="20"
                alt="Weather Icon"
              />{" "}
            </div>
          </CardHeader>
          <CardBody>
            <p>Temperature: {weather?.current?.temperature}°C</p>
            <p>Time: {weather?.current?.observation_time}</p>
          </CardBody>
        </Card>
      )}
      <h2 className="text-xl font-semibold my-5">Weather Search History</h2>
      <div className="space-y-4">
        {weatherHistory.map((item, index) => {
          return (
            <Card key={index} className="mt-5">
              <CardHeader>
                <div className="flex gap-2">
                  <h2 className="text-xl font-bold">
                    {item?.location?.name} - {item?.location?.region} -{" "}
                    {item?.location?.country}
                  </h2>
                  <img
                    className="rounded-xl"
                    src={item?.current?.weather_icons[0]}
                    height="18"
                    width="20"
                    alt="Weather Icon"
                  />{" "}
                </div>
              </CardHeader>
              <CardBody>
                <p>Temperature: {item?.current?.temperature}°C</p>
                <p>Time: {item?.current?.observation_time}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
