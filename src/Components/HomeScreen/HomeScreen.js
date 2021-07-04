import React from "react";
import Footer from "../Footer/Footer";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import DeliveryImage from "./Slider/DeliveryImage";
import Slider from "./Slider/Slider";

const HomeScreen = () => {
  return (
    <div>
      <Slider />
      <DeliveryImage />
      <FeaturedCard />
      <Footer />
    </div>
  );
};

export default HomeScreen;
