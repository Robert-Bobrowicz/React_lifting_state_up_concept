import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const GetWeather = (props) => {

    const [weatherData, setWeatherData] = useState(false);

    useEffect(() => {
        const city_url = `${process.env.REACT_APP_URL}q=${props.city}&appid=${process.env.REACT_APP_API_KEY}`;

        setTimeout(() => {
            axios(city_url)
                .then((res) => {
                    console.log(res);
                    setWeatherData(res);
                })
                .catch(err => console.log(err));
        }, 2000)

        return () => {
            setWeatherData(false);
        }
    }, [props.city])


    if (weatherData === false) {
        return (
            <div> Looking for a weather conditions ...</div>

        )
    } else {
        return (
            <>
                <div>Selected city: {props.city}
                <br></br>   
                    <div>Temperature: {(weatherData.data.main.temp - 273.15).toFixed()}°C</div>
                </div>
            </>

        )
    }
}
