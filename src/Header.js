import React, { useState, useEffect } from "react"



const Header = ({ startSearch }) => {
    const [lat, setLat] = useState(53)
    const [lon, setLon] = useState(27)


    const [location, setLocation] = useState(
        () => {
            const store = localStorage.getItem("location")
            const initStoredLocation = JSON.parse(store)
            return initStoredLocation || "";
        }
    )




    const handleSearchChange = (event) => {    
        setLocation(event.target.value);
    }



    useEffect(() => {
        localStorage.setItem("location", JSON.stringify(location))
    }, [location]);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)

        })
        const currentPosition = { lon, lat }
        console.log(currentPosition)
        if (!location) { startSearch(currentPosition) } else {
            startSearch(location)
        }

    }, [lat, lon])


    return (
        <div>
            <div>
                <input
                    type=""
                    value={location}
                    placeholder="Search..."
                    onChange={handleSearchChange}
                />
                <button onClick={() => startSearch(location)}>
                    <i>search</i>
                </button>
                <button onClick={() => {

                    startSearch("Minsk")
                    setLocation("Minsk")
                }}>
                    <i>Minsk</i>
                </button>
                <button onClick={() => {
                    startSearch("Moscow")
                    setLocation("Moscow")
                }}>
                    <i>Moscow</i>
                </button>
                <button onClick={() => {
                    startSearch('Bratislava')
                    setLocation("Bratislava")
                }}>
                    <i>Bratislava</i>
                </button>
            </div>
        </div>
    )
}

export default Header;