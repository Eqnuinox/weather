import React, { useState, useEffect, useCallback } from "react"
import qs from "qs"
import { Link, useNavigate } from "react-router-dom"
import classes from './Header.module.css';




//////////////

function useSeacrhState({
    name,
    serialize = String,
    deserialize = (v) => v,
}) {

    function setSearchParam(search, param, value) {
        const searchParams = new URLSearchParams(search)
        searchParams.set(param, value)
        return searchParams.toString()
    }

    function getSearchParam(search, param) {
        const searchParams = new URLSearchParams(search)
        return searchParams.get(param)
    }

    const navigate = useNavigate();

    const [value, setValue] = useState(() => {
        const initValue = deserialize(
            getSearchParam(
                window.location.search,
                name
            ))
        return initValue
    })


    const updateValue = useCallback((value) => {
        setValue(value)

        const newSearch = setSearchParam(
            window.location.search,
            name,
            serialize(value)
        )

        navigate(`?${newSearch}`, { replace: true })
    }, [navigate, name, serialize])


    return [value, updateValue]
}




////////////////


const Header = ({ startSearch }) => {
    const [lat, setLat] = useState(53)
    const [lon, setLon] = useState(27)

    const PARAM_NAME = "City"

    // const [location, setLocation] = useState(
    //     () => {
    //         try{
    //             const store = localStorage.getItem("location")
    //             const initStoredLocation = JSON.parse(store)
    //             return initStoredLocation || "";
    //         } catch(e){
    //             console.log("Processing...")
    //         }
    // )

    // useEffect(() => {
    //     // localStorage.setItem("location", JSON.stringify(location))
    // }, [location]);
    // **localStorage variant


    const [location, setLocation] = useSeacrhState({
        name: PARAM_NAME,
        deserialize: (v) => (v ? v : "")
    })


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)

        })
        const currentPosition = { lon, lat }
        if (!location) { startSearch(currentPosition) } else {
            startSearch(location)
        }

    }, [lat, lon])

    const handleSearchChange = (event) => setLocation(event.target.value);


    return (
        <div className={classes.header}>
            <div className={classes.search}>
                <input
                    type=""
                    value={location}
                    placeholder="Search..."
                    onChange={handleSearchChange}
                />
                <Link to={{
                    pathname: `/`,
                    search: `?City=${location}`
                }}>
                    <button onClick={() => startSearch(location)}>
                        <i>search</i>
                    </button>
                </Link>

                <Link
                    to={{
                        pathname: `/in/Minsk`,
                    }}>
                    <button>
                        <i>Minsk</i>
                    </button>
                </Link>
                <Link
                    to={{
                        pathname: "/in/Moscow",
                    }}>
                    <button>
                        <i>Moscow</i>
                    </button>
                </Link>
                <Link
                    to={{
                        pathname: "/in/Bratislava",
                    }}>
                    <button>
                        <i>Bratislava</i>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header;