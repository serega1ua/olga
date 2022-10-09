import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import Img4 from "../assets/4.jpg";
import Img5 from "../assets/5.jpg";

const CarouselComponent = () => {
  const items = [
    {
      name: "First 1",
      description: "1",
      img: Img1
    },
    {
      name: "First 1",
      description: "1",
      img: Img2
    },
    {
      name: "First 1",
      description: "1",
      img: Img3
    },
    {
      name: "First 1",
      description: "1",
      img: Img4
    },
    {
      name: "First 1",
      description: "1",
      img: Img5
    }
  ];
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible
      NextIcon={<ArrowForward />}
      PrevIcon={<ArrowBack />}
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
