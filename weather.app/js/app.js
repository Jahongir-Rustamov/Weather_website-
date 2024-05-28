const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

changeLocation.city.focus()
//UpdateUI
const UpdateUI = (weather) => {
  details.innerHTML = `
    <h5 class="mb-3">${weather.name},${weather.sys.country}</h5>
    <p class="mb-3">${weather.weather[0].main}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(weather.main.temp)}</span>
      <span>&deg;C</span>
    </div>`;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};

// loader
function loader(state){
if(state){
  overlay.classList.remove('d-none')
}else{
  overlay.classList.add('d-none')
}
}
//get location
changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityname = changeLocation.city.value.trim();
  changeLocation.reset();
  console.log(cityname);
  getweather(cityname).then((data) => UpdateUI(data));
});

//get weather
const getweather = async (city) => {
  const data = await getdata(city);
  return data;
};
