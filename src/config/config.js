module.exports = {
    "serverUrl": "http://helppal.net:8000",
    "categories": ["SUPERMARKET", "MEDICINE", "DOG_WALKING", "MAIL", "DELIVERY"],
    "priorities": ["HIGH", "MEDIUM", "LOW", "NONE"],
    "languages": [{
            code: 'en-US',
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
    "geolocationToken": "82fc3fc7e92706",
    "fakeRequests": [{
        id: 1,
        coord: { lat: 32.078044, lon: 34.774198 },
        onlyPreviousHelpers: false,
        status: 'Assigned',
        destProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
        ownerProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
        responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
        billPhoto: undefined,
        bagsPhoto: undefined,
        purchaseSum: 0,
        category: 'Supermarket',
        priority: 'High',
        name: 'Omer Fishman',
        phoneNumber: '0522424395',
        address: 'King George 68, Tel-Aviv, Israel',
        comments: "Take your Time"
    },
    {
        id: 2,
        coord: { lat: 32.075044, lon: 34.794198 },
        onlyPreviousHelpers: false,
        status: 'Assigned',
        ownerProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
        destProfile: { id: 3, name: 'Omer Fishman', email: 'omerfishman.work@gmail.com', phoneNumber: '0522123456', image: undefined, address: '', coords: { lat: 32.075044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 2, badge: false, birthYear: 1988, score: 12 },
        responderProfile: { id: 2, name: 'Blue Blue', email: 'omerfishman.work@gmail.com', phoneNumber: '0505123456', image: undefined, address: '', coords: { lat: 32.086044, lon: 34.794198 }, language: ['hebrew', 'english'], cases: 3, badge: true, birthYear: 1995, score: 81 },
        billPhoto: undefined,
        bagsPhoto: undefined,
        purchaseSum: 0,
        category: 'Medicine',
        priority: 'Low',
        name: 'Omer Fishman',
        phoneNumber: '0522424395',
        address: 'King George 68, Tel-Aviv, Israel',
        description: "Be fast please!!"
    }
    ]
}