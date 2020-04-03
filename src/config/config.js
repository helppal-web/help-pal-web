module.exports = {
    "serverUrl": "http://localhost:3000",
    "categories": ["Supermarket", "Medicine", "Walk the dog", "Mail", "Delivery"],
    "priorities": ["High", "Medium", "Low", "None"],
    "languages": [{
            code: 'en',
            text: 'English',
        },
        {
            code: 'he',
            text: 'Hebrew',
        }
    ],
    "MapBoxKey": "pk.eyJ1Ijoib21lcmZpc2htYW4iLCJhIjoiY2s4Z2N4bm5mMDA4dzNmczBxeXo3a3Q2aCJ9.G_b_Djz3LbKZpyULlQIAvQ",
    "placesAutocompleteURL": "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest",
    "geolocationURL": 'https://eu1.locationiq.com/v1/search.php',
    "geolocationToken": "82fc3fc7e92706"
}