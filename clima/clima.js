const axios = require('axios').default;

const getWeather = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d8763bd5db5a0bc691280b1061b3b8e9`);

    if (resp === '') {
        throw new Error("No hay retorno para la latitud ${lat} and longitud ${lng}");
    }

    let clima = resp.data;

    return clima.main.temp;

}

module.exports = {
    getWeather
}