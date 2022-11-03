import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decodingApiRequest, forecastApiRequest } from "../utils";
import Days from "./Days";
import classes from './Detalis.module.css'


const DetalesPage = () => {

    const { City } = useParams();

    async function updateDetales(location) {
        const [decResponse] = await decodingApiRequest(location)
        const wetResponse = await forecastApiRequest(decResponse)
        setDetailsWeather(wetResponse)
    }

    const [detailsWeather, setDetailsWeather] = useState([])

    useEffect(() => {
        updateDetales(City)
    }, [City])


    try {
        const { list, city } = detailsWeather
        const [desList] = list

        return (
            
            <div className={classes.daysList}>
                {City}
                {list.map((item, index) => <Days key={index} weatherData={item}/>)}
            </div>
        )
    }
    catch (e) {

    }
}


export default DetalesPage;