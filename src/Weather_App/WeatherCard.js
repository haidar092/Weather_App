import React, { useState, useEffect } from 'react';

const WeatherCard = ({ tempInfo }) => {
    const { temp, pressure, humidity, weathermood, name, speed, country, sunset } = tempInfo;
    let sec = sunset;
    let date = new Date(sec * 1000);
    let TimeStr = `${date.getHours()}:${date.getMinutes()}`;
    const [weatherState, setWeatherState] = useState('');
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    break;
                case "Haze": setWeatherState("wi-fog");
                    break;
                case "Clear": setWeatherState("wi-day-sunny");
                    break;
                    case "Mist": setWeatherState("wi-dust");
                    break;
                    case "Smoke": setWeatherState("wi-smoke");
                    break;
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }

    }, [weathermood]);
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherConition">{weathermood}</div>
                        <div className="place">{name} , {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-day-sunny"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {TimeStr}:PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} g.kg-1 <br />
                                Humidity
                            </p>
                        </div>

                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} pascl  <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} km/h<br />
                                Speed
                            </p>
                        </div>

                    </div>

                </div>
            </article>
        </>
    )
}

export default WeatherCard;
