import './style.css';
import './APIs/dataFetching.js';
import { fetchData } from './APIs/dataFetching.js';

const form = document.querySelector('form');

const img = document.querySelector('img');
const setGIF = (condition) => {

    if(condition == 'rain') condition = 'rainy'
    else if(condition == "Partially cloudy") condition = "cloudy sky"
    else if(condition == "clear") condition = "sunny"

    fetch('https://api.giphy.com/v1/gifs/search?api_key=ihGHLWdQRKRVwa506c50lU3l4Mca0oMY&q=' + condition + '&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips', {mode: 'cors'})
    .then(function(response) {
    return response.json()
    }).then(function(response) {
        img.src = response.data[0].images.original.url;
    });
}

setGIF("weather")


form.addEventListener('submit', async (event) => {

    event.preventDefault();

    const location = document.querySelector('#search').value;
    const data = await fetchData(location)

    const weather = data.days[0].conditions.split(',')[0]

    setGIF(weather)
})

console.log("It works!")