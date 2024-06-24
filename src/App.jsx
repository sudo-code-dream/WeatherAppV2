import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import { useEffect, useState } from "react";
import clear from "/clear.png";
import cloud from "/cloud.png";
import drizzle from "/drizzle.png";
import rain from "/rain.png";
import snow from "/snow.png";

const App = () => {
  const [weatherData, setWeatherData] = useState(false);

  const [inputValue, setInputValue] = useState("London");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear;
      setWeatherData({
        name: data.name,
        temp: data.main.temp,
        desc: data.weather[0].description,
        icon: icon,
        country: data.sys.country,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        feel: data.main.feels_like,
        weather: data.weather[0].main
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search(`${inputValue}`);
  }, [inputValue]);

  return (
    <div className="container">
      <List onInputChange={handleInputChange} weatherData={weatherData} />
      <Chat weatherData={weatherData} />
      <Detail weatherData={weatherData} />
    </div>
  );
};

export default App;
