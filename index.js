let now = new Date();
let hour = now.getHours();
let amOrPm = hour >= 12 ? "pm" : "am";
hour = hour % 12 || 12;
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
let h5 = document.querySelector("h5");
h5.innerHTML = ` ${day} ${hour}:${minute} ${amOrPm} `;

//challenge 1

function displayTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}℃`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=017d56650cd168d68067850318775d43`;
  axios.get(`${apiUrl}`).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

// Challenge 2

function temperatureNow(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let newTemp = document.querySelector("h2");
  newTemp.innerHTML = `${currentTemp}℃`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}
function displayLocation(position) {
  console.log(position);
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;

  let apiiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=017d56650cd168d68067850318775d43`;
  axios.get(apiiUrl).then(temperatureNow);
}

function displayPosition() {
  navigator.geolocation.getCurrentPosition(displayLocation);
}

let locationButton = document.querySelector("#current");
locationButton.addEventListener("click", displayPosition);

//challenge 3

// function inCelsius(event) {
//   event.preventDefault();
//   let celsius = document.querySelector("h2");
//   celsius.innerHTML = "20";
// }
// let showCelsius = document.querySelector("#Celsius");
// showCelsius.addEventListener("click", inCelsius);

// function inFahrenheit(event) {
//   event.preventDefault();
//   let fahrenheit = document.querySelector("h2");
//   fahrenheit.innerHTML = "68";
// }
// let showFahrenheit = document.querySelector("#Fahrenheit");
// showFahrenheit.addEventListener("click", inFahrenheit);
