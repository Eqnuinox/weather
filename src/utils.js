
const API_KEY = '8646812925d47aa6b1e1b431f9965971'

export async function weatherApiRequest(location) {

    const { lat, lon } = location



    const url = new URL(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=${API_KEY}`)

    try {
        url.search = new URLSearchParams();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&lang=en&appid=${API_KEY}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}


export async function decodingApiRequest(location) {

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}


export async function forecastApiRequest(location) {
    const { lat, lon } = location

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=10&appid=${API_KEY}`)
        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Detales processing...")
    }
}