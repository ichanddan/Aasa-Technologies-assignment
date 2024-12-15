import { useState } from 'react'
import { Input, Button, Card, CardBody, CardHeader } from "@nextui-org/react"

export default function WeatherSearch() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const searchWeather = async () => {
    e.preventDefault()
    // This is a placeholder API call. Replace with a real weather API in a production app.
    const res = await fetch(`https://api.example.com/weather?city=${city}`)
    const data = await res.json()
    setWeather(data)
  }

  return (
    <div className="mt-10">
      <form onSubmit={searchWeather} className="flex space-x-2">
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow"
        />
        <Button color="primary" type="submit">Search</Button>
      </form>
      {weather && (
        <Card className="mt-5">
          <CardHeader>
            <h2 className="text-xl font-bold">{weather.city}</h2>
          </CardHeader>
          <CardBody>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Condition: {weather.condition}</p>
          </CardBody>
        </Card>
      )}
    </div>
  )
}

