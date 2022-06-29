const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR-API-KEY',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export async function get(event) {
    const { searchParams } = event.url;
    const query = searchParams.get('q') ?? 'Concordia';
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS);
    
    const data = await response.json();

    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
    const { text, icon } = condition;

    const body =  {
        conditionText: text,
        conditionIcon: icon,
        country: country, 
        localtime: localtime,
        locationName: name,
        humidity: humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        winDir: wind_dir
    };
    return {
        status: 200,
        body
    };
}