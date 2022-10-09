import React from "react";
import CarouselComponent from "../Carousel.js";
import Footer from "../Footer.js";
import Header from "../Header.js";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <CarouselComponent />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
