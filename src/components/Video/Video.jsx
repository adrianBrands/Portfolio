import  VideoFile  from '../../images/video.mp4';

export function Video() {
 return  <div>
      <video autoPlay muted loop className="video">
        <source src={VideoFile} type="video/mp4"/>
      </video>
      </div>
}