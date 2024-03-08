import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.js-search');
const cityButton = document.querySelector('.search-city');
const weatherInfo = document.getElementById('js-info-weather-city');
const forecastText = document.querySelector('p.forecast-text');

form.addEventListener('submit', getFormValues);

async function getFormValues(event) {
  event.preventDefault();
  const city = event.target.elements.city.value.trim() || '';
  try {
    const data = await serviceWeather(city);

    const country = data.location.country;
    const image = data.current.condition.icon;
    const temperature = data.current.temp_c;
    const text = data.current.condition.text;

    const weatherHtml = `
                <h2 class="country-city-title">${country}, ${city}</h2>
                <img class="weather-city-image" src="${image}" alt="${text}">
                <p class="weather-city-info">Temp.: ${Math.floor(
                  temperature
                )} &deg;C</p>
                <p class="weather-city-info">${text}</p>
        `;
    weatherInfo.innerHTML = weatherHtml;

    forecastText.textContent = generateForecast(text);

    event.target.elements.city.value = '';
    cityButton.blur();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }
  form.reset();
}

async function serviceWeather(city) {
  const BASE = 'https://api.weatherapi.com/v1';
  const response = await (
    await axios.get(`${BASE}/current.json`, {
      params: {
        key: '14c56bddeab14583a6e164909231107',
        q: city,
        lang: 'en',
      },
    })
  ).data;
  return response;
}

function generateForecast(text) {
  const rain =
    'Rain taps softly, like music, setting the scene for books. Rainy days are cozy, perfect for getting lost in books';
  const snow =
    'Snow falls gently, making reading by the fire even better. Snowy weather creates a peaceful setting for immersive reading sessions';
  const clear =
    'Sunny days make reading outside under trees delightful. Sunlight makes reading enjoyable with its warm and bright rays';
  const anyWeather =
    'Any weather is book weather! Embrace reading anytime, anywhere';
  const cloudy =
    'Soft light filters through the clouds, ideal for cozy reading. Cloudy days offer a calm atmosphere, perfect for uninterrupted reading';

  if (text.toLowerCase().includes('cloudy')) {
    return cloudy;
  } else if (text.toLowerCase().includes('rain')) {
    return rain;
  } else if (text.toLowerCase().includes('snow')) {
    return snow;
  } else if (text.toLowerCase().includes('sunny')) {
    return clear;
  } else {
    return anyWeather;
  }
}
