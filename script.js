const apiKey = "";

async function checkWeather() {
    const city = document.querySelector(".search input").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=${city}`
    const response = await fetch(apiUrl);
    if (response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();document.querySelector(".city").innerHTML = data.name;
        
        console.log(data);

        document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + `°c`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = parseInt(data.wind.speed) + ` km/h`;

        if (data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }
          document.querySelector(".error").style.display = "none";
          document.querySelector(".weather").style.display = "block";
        }
      }

      
