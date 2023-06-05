import VideoFileDark from "../../images/video.mp4";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import VideoFileLight from "../../images/mixkit-flying-through-the-clouds-with-the-radiant-sun-14171-medium.mp4";

export function Video() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {theme === "light" ? (
        <video  autoPlay="autoplay" 
        loop={true}
        controls={false} 
        playsInline="playsinline"
        muted={true}
        src={VideoFileDark}
        type="video/mp4" 
        
        className="video"/>
          

        
      ) : null}

      {theme === "dark" ? (
        <video width="100%" height="100%" controls="true" autoPlay muted loop playsInline="true" disablePictureInPicture="true" className="video">
          <source src={VideoFileLight} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
