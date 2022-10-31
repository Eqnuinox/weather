import React from "react"



const Page = ({weatherData}) => {

    const {main, weather, wind, name } = weatherData
//  main:  feels_like     d: description    wing: deg
//         grnd_level                             gust
//         humidity                               speed
//         pressure
//         sea_level
//         temp
//         temp_max
//         temp_min

    
    try{

        const [d] = weather

        console.log(d)

        return(
            <div>
                <div>Город: {name}</div>
                <div>Температура на улице: {(main.temp - 273).toFixed(1)}°C</div>
                <div>Ощущаеться как: {(main.feels_like - 273).toFixed(1)}°С</div>
                <div>{d.description}</div>
                <div>Скорость ветра {(wind.speed).toFixed(1)} м/с</div>
                <div>Давление {(main.pressure / 1.333).toFixed(1)} мм. рт. с.</div>

            </div>
        )
    }catch(error){
        console.log(error)
    }

}

export default Page;