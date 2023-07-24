import React from "react";
import NavigationBar from "../components/NavigationBar";
import PopularContainer from "../components/TopRatedContainer";
import TrendingContainer from "../components/TrendingContainer";

const HeroPage = () => {
  return (
    <div>
      <NavigationBar />
      <TrendingContainer />
      <PopularContainer />
    </div>
  );
};

export default HeroPage;
