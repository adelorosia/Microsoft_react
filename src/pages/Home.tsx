import React from "react";
import Cards from "../components/cards/Cards";
import Header from "../components/header/Header";
import Xbox from "../components/xbox/Xbox";
import Carbon from "../components/carbon/Carbon";
import Follow from "../components/follow/Follow";
import Links from "../components/links/Links";

const Home:React.FC = () => {

  return (
    <div>
      <Header />
      <Cards position="top"/>
      <Xbox />
      <Cards position="bottom" />
      <Carbon />
      <Follow />
      <Links />
    </div>
  );
};

export default Home;
