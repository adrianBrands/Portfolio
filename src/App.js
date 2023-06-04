import React from "react";
import { Footer, Header } from "./components";
import { Video } from "./components/Video/Video";
import { Greeting } from "./components/Greeting/Greeting";
import { About } from "./components/About/About";
import { AboutContent } from "./components/AboutContent/AboutContent";
import { CarouselSlide } from "./components/Carousel/Carousel";
import { Container } from "react-bootstrap";
import { Cards } from "./components/Cards/Cards";
import { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />

        <Video />
        <Greeting />
        <About />
        <AboutContent />
        <CarouselSlide />
        <Cards />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
