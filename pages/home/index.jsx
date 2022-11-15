import React from "react";
import Carousel from "../../components/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import Customers from "../../components/customers/Customers";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
const Index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
