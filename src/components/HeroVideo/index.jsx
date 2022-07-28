import styles from "./styles.module.css"

const HeroVideo = (props) => {
  return (
    <div className={styles.wrapper_herovideo}>
        <div className={styles.container_herovideo}>
          <video className={styles.herovideo} width="1280" height="720" autoPlay controls muted loop>
              <source src={props.videoSrc} type="video/mp4"/>
          </video>
        </div>
    </div>
  )
}

export default HeroVideo;
