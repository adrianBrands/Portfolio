import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return <div className={theme === "light" ? "footer bg-light" : "footer bg-dark text-white" }>Adrian Brandshaug</div>;
}
