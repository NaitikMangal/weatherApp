
const apiKey = "1e9847073fd1b5f290c6f5fc94109f84";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

// console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    let w=data.weather[0].main;
    const a=  w.toLowerCase();
    weatherIcon.src= "images/"+ `${a}`+ ".png";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
}
    }

    searchBox.addEventListener("keypress", (event)=>{
            if(event.key=== "Enter"){
              searchBtn.click();
            }
    })

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})