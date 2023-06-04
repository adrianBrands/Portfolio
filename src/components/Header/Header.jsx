import { useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Navbar sticky="top" expand="lg" className={theme === "light" ? "bg-light" : "bg-dark navbar-dark"}>
      <Container>
        <Navbar.Brand>Welcome</Navbar.Brand>
        <Navbar.Brand  onClick={() => (theme === "dark" ? setTheme("light") : null)}>
          <FaMoon />
        </Navbar.Brand>
        <Navbar.Brand  onClick={() => (theme === "light" ? setTheme("dark") : null)}>
          <FaSun />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
