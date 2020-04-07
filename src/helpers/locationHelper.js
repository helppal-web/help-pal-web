export function getCurrentPosition() {
    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {
            reject('No Location');
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                resolve({ lat, lon });
            }, (err) => {
                reject('No Location');
            });
        }
    });
}
