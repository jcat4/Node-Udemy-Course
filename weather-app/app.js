const request = require('request')

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1431%20North%20Merion%20way%20fayetteville&key=AIzaSyAqDvE1M6ER9RiN03-Eq-Pur7vaVxmtc-E',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`)

    var location = body.results[0].geometry.location

    console.log(`Latitude: ${location.lat}`)
    console.log(`Longitude: ${location.lng}`)
})