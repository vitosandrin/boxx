import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import videodev from '../../assets/video/dev.webm'

//Global Components
import {
  CarouselComponent,
  CascatleTitle,
  Footer,
  FormBudget,
  FormEmail,
  HeroVideo,
  Modal
} from '../../components';
import { ToolsDev } from '../../assets/data/dev';
import Carousel from 'react-elastic-carousel'

//Local Components
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import ModalSection from './components/ModalSection';

const Desenvolvedor = () => {

  const [isOpen, setIsOpen] = useState(false);

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <div className={styles.body_dev}>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalSection />
        <Carousel
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          focusOnSelect={true}
          transitionMs={2000}
        >
          {ToolsDev.map(item => {
            return (
              <CarouselComponent key={item.id} src={item.image} alt={item.title} />
            )
          })}
        </Carousel>
      </Modal>

      <CascatleTitle text={"Dev"} />

      <div className={styles.video_dev}>
        <HeroVideo videoSrc={videodev} />
      </div>

      <MainSection />
      <div className={styles.container_carousel}>
        <Carousel
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          focusOnSelect={true}
          transitionMs={2000}
        >
          {ToolsDev.map(item => {
            return (
              <CarouselComponent key={item.id} src={item.image} alt={item.title} />
            )
          })}
        </Carousel>
      </div>

      <InfoSection />
      <FormBudget />
      <div onClick={() => setIsOpen(true)} className={styles.button_modaldev}>
        Como trabalhamos?
      </div>

      <div className={styles.divider}></div>

      <FormEmail />

      <Footer />

    </div>
  )
}

export default Desenvolvedor;