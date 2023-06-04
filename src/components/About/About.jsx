import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function About() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme === "light" ? "about-light" : "about-dark"} className="d-flex flex-column align-items-center">
      <h3 className="fs-2 fw-lighter mt-3 mb-3 ">Front End Student</h3>
    </div>
  );
}
