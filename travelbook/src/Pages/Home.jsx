import React from "react";
import FeaturedOffers from "../Components/FeaturedOffers";

import SerachComponent from "../Components/SerachComponent";
import ThreeCard from "../Components/ThreeCard";
import TodaysTopDeal from "../Components/TodaysTopDeal";

import TravlingAdvaice from "../Components/TravlingAdvaice";
import "../css/homePage.css";

const Home = () => {
  return (
    <div className="home-page">
      <SerachComponent />
      <ThreeCard />
      <FeaturedOffers />
      <TodaysTopDeal />

      <TravlingAdvaice />
    </div>
  );
};

export default Home;
