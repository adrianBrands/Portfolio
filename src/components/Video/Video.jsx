import VideoFileDark from "../../images/video.mp4";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import VideoFileLight from "../../images/mixkit-flying-through-the-clouds-with-the-radiant-sun-14171-medium.mp4";

export function Video() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {theme === "light" ? (
        <video autoPlay muted loop playsInline="true" disablePictureInPicture="true" className="video">
          <source src={VideoFileDark} type="video/mp4" />
        </video>
      ) : null}

      {theme === "dark" ? (
        <video autoPlay muted loop playsInline="true" disablePictureInPicture="true" className="video">
          <source src={VideoFileLight} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
