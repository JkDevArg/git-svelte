

export async function getWeatherFrom (query = 'Lima'){
    return  fetch(`/api/get-weather?q=${query}`).then(res => res.json())
}