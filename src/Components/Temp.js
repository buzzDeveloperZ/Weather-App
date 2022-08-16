import React, { useEffect, useState } from "react";
import "../Components/style.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("surat");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=de15a78cc34c6194119ce834b9a83945&units=imperial`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
     
    };
    fetchApi();
  }, [search]); // []  refrash thay pasi j value ave ana mate //  serch change thay tyre j batave

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className=" fa fa-solid fa-street-view"> </i> {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">{city.temp_min}°C</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Temp;
