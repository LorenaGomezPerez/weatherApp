import { ajax } from "../tools/ajax";

const citiesApi = async (city) => {
  const optionsCities = {
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city},appid=d9b0bcbc7a554c0817cc4931f52fe44f`,
    params: {
      q:"city"
      units: "metric",
    },
    headers: {
      "X-RapidAPI-Key": "18159b6bb1msh5a34fc322d38fa7p114e3ejsn4ab26458046b",
      "X-RapidAPI-Host": "referential.p.rapidapi.com",
    },
  };
  return await ajax(optionsCities);
};

export default citiesApi;
