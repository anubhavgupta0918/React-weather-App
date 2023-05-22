import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c573439a89cfb902fb05ecfd006e8036`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson.main)
        }
        
        fetchApi();
    },[search])
  return (
    <>
      <div className="box">
        <div className="inputData">
            <input type="search" className="inputFeld" placeholder="City name" onChange={(event) => {
                setSearch(event.target.value)
            }}/>
        </div>
      
      {!city ? (
        <p className="errorMsg">No Data Found</p>) : (
            <div> 
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view" ></i>{search}
            </h2>
            <h1 className="temp">{city.temp}℃el</h1>
            <h3 className="tempmin_max"> Min :{city.temp_min}℃el | Max : {city.temp_max}℃el</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>

            </div>
        )}

        

      </div>

    </>
  );
}

export default Tempapp;
