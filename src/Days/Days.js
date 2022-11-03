import React from "react";
import classes from './Days.module.css'

const Days = ({weatherData})  =>{ 

    const {dt_txt, main, weather} = weatherData
    const [t] = weather
    

    return(
        <div className={classes.dayCards}>
            <div>{dt_txt}</div>
            <div>{t.main}</div>
            <div>Temp: {(main.temp-273).toFixed(1)}°С</div>
            <div>Feels like: {(main.feels_like-273).toFixed(1)}°С</div>
        </div>
    )

}

export default Days;