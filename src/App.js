import React from 'react';
import { Footer, Header } from "./components";
import { Video } from './components/Video/Video';
import { Greeting } from './components/Greeting/Greeting';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <Header/>
      
      <Video/>
      <Greeting/>
      
      <Footer/>
    </>
  );
}

export default App;
