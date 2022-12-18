import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SearchResultPage from "../Pages/SearchResultPage";
import SingleHotelPage from "../Pages/SingleHotelPage";
import Home from "../Pages/Home";
import Pagenotfound from "../Pages/Pagenotfound";
import TestPage from "../Pages/TestPage";
import Payment from "../Pages/Payment";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/searchresult" element={<SearchResultPage />}></Route>
        <Route path="*" element={<Pagenotfound />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/singlehotelpage" element={<SingleHotelPage />}></Route>
        <Route path="/singlehotelpage/:" element={<SingleHotelPage />}></Route>
      </Routes>
    </div>
  );
};
