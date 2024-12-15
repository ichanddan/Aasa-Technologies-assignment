import { Card, CardBody, CardHeader } from "@nextui-org/react"

export default function ProfilePage() {
  // This is mock data. In a real app, you'd fetch this from an API or database.
  const weatherHistory = [
    { date: '2023-06-01', city: 'New York', temperature: 25, condition: 'Sunny' },
    { date: '2023-06-02', city: 'London', temperature: 18, condition: 'Cloudy' },
    { date: '2023-06-03', city: 'Tokyo', temperature: 30, condition: 'Clear' },
  ]

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-5">Profile</h1>
      <h2 className="text-xl font-semibold mb-3">Weather Search History</h2>
      <div className="space-y-4">
        {weatherHistory.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <h3 className="font-bold">{item.date} - {item.city}</h3>
            </CardHeader>
            <CardBody>
              <p>Temperature: {item.temperature}°C</p>
              <p>Condition: {item.condition}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

