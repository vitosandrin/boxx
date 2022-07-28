import { useState } from 'react'
import Lottie from 'react-lottie'
import styles from './styles.module.css'

const Loader = (props) => {
  const [animate, setAnimate] = useState({
    isStopped: false, isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: props.data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className={styles.animation}>
      <Lottie options={defaultOptions}
        height={400}
        width={400}
        isStopped={animate.isStopped}
        isPaused={animate.isPaused} />
    </div>
  )
}

export default Loader