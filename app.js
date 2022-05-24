const api ={
    key : "6dea9a8fa1c15bf7c3937d289a343a1f",
    baseURL : "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector('.search-box');

search.addEventListener('keydown', (evt) =>{
    if(evt.key == "Enter"){
        find(search.value);
        search.value = '';
      }
});

function find(x){
    fetch(`${api.baseURL}weather?q=${x}&units=metric&appid=${api.key}`)
        .then(weather =>{
            return weather.json();
        }).then(display);
}

function display(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    // let now = new Date();
    // let date = document.querySelector('.location .date');
    // date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }