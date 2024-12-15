import AppNavbar from "../navebar/nave";
import WeatherSearch from "../websarch";

export default function Home() {
  return (
    <>
      <main className="container mx-auto mt-10 px-40">
        <h1 className="text-3xl font-bold mb-5">Welcome to Weather App</h1>
        <WeatherSearch />
      </main>
    </>
  )
}

