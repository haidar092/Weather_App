import React, { useState, useEffect } from 'react';
import "./style2.css";
import WeatherCard from './WeatherCard';

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Lahore");
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f82ec031ab932538dd1bf7f5f6e9e213`;

            const res = await fetch(url);


            const data = await res.json();
            const { temp, pressure, humidity } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            console.log(temp);
            const { country, sunset } = data.sys;

            const myWeatherInfo = { temp, pressure, humidity, weathermood, name, speed, country, sunset };
            setTempInfo(myWeatherInfo);
        }
        catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getWeatherInfo();
    }, [])



    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search..." autoFocus id="search" className="searchTerm"
                        value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>

            </div>


            <WeatherCard  tempInfo={tempInfo}/>
           
        </>
    )
}

export default Temp;
