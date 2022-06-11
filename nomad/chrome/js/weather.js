const API_KEY = "e44a6b7ce6022a64ac528189c90db4c3"



function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  });

  
}

function onGeoErr() {
  alert("Can't find your location.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);