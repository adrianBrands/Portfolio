import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import petrolImage from "../../images/screenshot2.jpg";
import auctioImage from "../../images/semesterProject2HomePage.jpg";
import holidaze from "../../images/Holidaze.jpg";
import ecom from "../../images/ecom.jpg";
import { Container } from "react-bootstrap";
export function CarouselSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel className="mt-5 mb-5" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={auctioImage} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ecom} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={petrolImage} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={holidaze} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
