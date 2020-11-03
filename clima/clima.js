const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=54181233273de570b13173b3bff5e284`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}