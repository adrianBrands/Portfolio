import { Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const scrollDown = () => {
  window.scroll({
    top: 710,
    behavior: "smooth",
  });
};

export function Greeting() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className={theme === "light" ? "greeting text-white" : "greeting text-dark"}>
      <h1>Adrian Brandshaug</h1>
      <h2>Front End Student</h2>
      <p className="fs-4">Welcome to my page I am a Front End student based in Bergen with passion for programming</p>
      <Button
        onClick={() => {
          scrollDown();
        }}
        variant="success"
        size="lg"
        className="mt-5">
        contact
      </Button>
    </Container>
  );
}
