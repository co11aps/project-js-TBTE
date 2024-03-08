import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.js-search');
const cityButton = document.querySelector('.search-city');
const weatherInfo = document.getElementById('js-info-weather-city');

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
                <p class="weather-city-info">Temperature: ${Math.floor(
                  temperature
                )} &deg;C</p>
                <p class="weather-city-info">${text}</p>
        `;
    weatherInfo.innerHTML = weatherHtml;
    if (
      temperature < 0 ||
      text.toLowerCase().includes('cloudy') ||
      text.toLowerCase().includes('rain')
    ) {
      iziToast.info({
        title: 'Reading Weather',
        message: 'The weather is perfect for reading a book!',
        position: 'center',
        timeout: 10000,
        messageColor: 'blue',
        backgroundColor: 'yellow',
        messageSize: '32px',
      });
    }
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
