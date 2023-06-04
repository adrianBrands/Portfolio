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
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
     <HelmetProvider>
     <Helmet>
          <title>Adrian Brandshaug</title>
          <meta
            name="description"
            content="Portfolio site created by Adrian"
          />
        </Helmet>
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
      </HelmetProvider>
    </>
  );
}

export default App;
