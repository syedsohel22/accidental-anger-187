import React from "react";
import FeaturedOffers from "../Components/FeaturedOffers";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SerachComponent from "../Components/SerachComponent";
import ThreeCard from "../Components/ThreeCard";
import TodaysTopDeal from "../Components/TodaysTopDeal";
import HereToHelp from "../Components/HereToHelp";
import TravlingAdvaice from "../Components/TravlingAdvaice";
const Home = () => {
  return (
    <div>
      <Navbar />
      <SerachComponent />
      <ThreeCard />
      <FeaturedOffers />
      <TodaysTopDeal />
      <HereToHelp />
      <TravlingAdvaice />
      <Footer />
    </div>
  );
};

export default Home;
