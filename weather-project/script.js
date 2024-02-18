navigator.geolocation.getCurrentPosition((position) => {
  const units = "metric",
    lang = "pt_br",
    appId = "ff5b1f0e5df8a57ce79fabcfa6e2a707",
    { latitude, longitude } = position.coords;

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&lang=${lang}&appid=${appId}`;

  axios
    .get(url)
    .then(function ({ data }) {
      // handle success
      setWeather(data);
      setTime();
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});

function setWeather(data) {
  const city = data.name,
    country = data.sys.country,
    degrees = data.main.temp.toFixed(1);

  $(".weather").innerText = `Tempo em ${city}, ${country}`;
  $(".degrees").innerText = `${degrees} Cº`;

  $(".weatherInfo>p").innerText = `${data.weather[0].description}`;
  $(".weatherInfo>img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  $(".humidity").innerHTML = `Umidade: <b>${data.main.humidity}%</b>`;

  const body = $("body");

  if (degrees >= 25) {
    body.style = "background-image: url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop)";
  } else if (degrees <= 24 && degrees >= 19) {
    body.style = "background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWMhgricD5ze2Gw478DM_DG5s3sf6ZV0llg&usqp=CAU)";
  } else {
    body.style = "background-image: url(https://wallpapercave.com/wp/wp9805898.jpg)";
  }
}

function setTime() {
  const date = new Date();

  const day = date.getDate(),
    month = date.getMonth() + 1;
  (year = date.getFullYear()), (hour = date.getHours()), (minutes = date.getMinutes());

  $(".time").innerText = `${day}/${month}/${year} às ${hour}:${minutes} | `;
}

function $(q) {
  return document.querySelector(q);
}
