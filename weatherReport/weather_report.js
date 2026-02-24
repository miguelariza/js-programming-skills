function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '3e0aa5af1fc736f4adf1e9ce6f30dc4d';
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city}&appid={apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        wheatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451</p>
            <p>Weather: ${data.weather[0].description}</p>`;
    })

}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

