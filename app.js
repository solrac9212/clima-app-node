const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad a obtener el clima",
        demand: true,
    },
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(7.13, -73.1)
//     .then(console.log).catch(console.log);
var direccion = argv.direccion;
const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `el clima de ${coords.direccion} es de ${temp}`
    } catch (e) {
        return `no se pudo determinar el clima de ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(console.log).catch(console.log);