export async function weatherApiRequest(location) {

    const {lat , lon} = location



    const url = new URL(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=78d71e5b51f6e7daede7d07d9f43fc6c`)
    
    try {
        url.search = new URLSearchParams();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&lang=ru&appid=78d71e5b51f6e7daede7d07d9f43fc6c`);
        const data = await response.json();
        console.log("FinRes = ", data)
        return data;

    } catch (error) {
        console.error(error);
    }
}


export async function decodingApiRequest(location) {

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=78d71e5b51f6e7daede7d07d9f43fc6c`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}
