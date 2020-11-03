const axios = require('axios');


const getLugarLatLon = async(dir) => {

    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
        params: { 'q': dir, 'appid': '54181233273de570b13173b3bff5e284' }

    });

    const resp = await instance.get();

    if (resp.data.leng === 0) {
        throw new Error(`no hay resltados para la ciudad ${direccion}`);

    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    return {
        direccion,
        lat,
        lon


    }
}

module.exports = {

    getLugarLatLon
}