import React from "react";
import NavigationBar from "./NavigationBar";
import TrendingContainer from "./TrendingContainer";
import PopularContainer from "./TopRatedContainer";

const HeroPage = () => {
  return (
    <div id="Home">
      <NavigationBar />
      <TrendingContainer />
      <PopularContainer />
    </div>
  );
};

export default HeroPage;
