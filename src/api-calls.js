const getTemp = (query) =>{
    const axios = require('axios');
    const getCoordinates = () => {
        axios
        .get('http://127.0.0.1:5000/location', {
            params: { 
                key: 'pk.3af299d6e0524830860d19ff1c6cc8bf',
                q: query,
                format: 'json'
            },},
        )
        .then(function (response) {
            let lat = response.data[0]['lat'];
            let lon = response.data[0]['lon'];
            getWeather(lat,lon);
        })
        .catch(function (error) {
            console.error(error);
        });
    }
    getCoordinates()
    const getWeather = (lat,long) => {
        axios
        .get('http://127.0.0.1:5000/weather', {
            params: { 
                appid: '28eae06ca45c269fbcae1f2d082cf216',
                lat: lat,
                lon: long
            },},
        )
        .then(function (response) {
            let k = response.data['main']['temp'];
            let f = Math.floor((k-273.15)*1.8)+32;
            console.log(f);
            return(f);

        })
        .catch(function (error) {
            console.error(error);
        });


    }
}
getTemp('515 w gardena blvd');

