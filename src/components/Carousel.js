import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/carousel.css";

export default class MyCarousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        className={styles.carousel} // Use className instead of id
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={5}
        isPlaying={true}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={3}>I am the 4th Slide.</Slide> {/* Fixed typo */}
          <Slide index={4}>I am the 5th Slide.</Slide> {/* Fixed typo */}
        </Slider>
        <ButtonBack className="carousel-button"> {"<-"} </ButtonBack>
        <ButtonNext className="carousel-button"> -> </ButtonNext>
      </CarouselProvider>
    );
  }
}

