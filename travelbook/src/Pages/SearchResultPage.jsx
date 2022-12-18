import React from "react";
//import HotelCard from "../Components/HotelCard";
import HotelList from "../Components/HotelList";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import "../css/searchresultpage.css";
import { Link as RouterLink } from "react-router-dom";
//get query
//fetch call and get data
//map it to component
//style the component

const SearchResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotel, setHotel] = useState([]);

  let searchData = JSON.parse(localStorage.getItem("searchData"));
  console.log(searchData.city);
  let query = searchData.city;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `https://bookit-com-server.onrender.com/hotel?city=${query}`;

    setIsLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();

      setHotel(data);
      console.log("hotel-data", data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return <div>{isLoading ? <Loading /> : <HotelList hotel={hotel} />}</div>;
};

export default SearchResultPage;
