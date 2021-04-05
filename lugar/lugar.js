const axios = require('axios').default;

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccion}&key=AIzaSyDtFz5cvRUld1JCIhnndwGom5BJEdGE_nY`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para la ciudad ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    // console.log(resp.data.results[0]);
    // console.log(JSON.stringify(resp.data, undefined, 2));

    // console.log('Direccion:', location.formatted_address);
    // console.log('lat', coors.lat);
    // console.log('lng', coors.lng);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };

}

module.exports = {
    getLugarLatLng
}