import "./styles.css"

const HeroVideo = (props) => {
  return (
    <div className="wrapper_herovideo">
        <div className="container_herovideo">
          <video className="herovideo" width="1280" height="720" autoPlay controls muted loop>
              <source src={props.videoSrc} type="video/mp4"/>
          </video>
        </div>
    </div>
  )
}

export default HeroVideo;
