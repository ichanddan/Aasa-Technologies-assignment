import { useState } from "react";
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { handelSearchCity } from "../Api";
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
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
    </div>
  );
}
