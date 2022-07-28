import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import video from '../../assets/video/design1.webm'

//Global Components
import {
    CascatleTitle,
    HeroVideo,
    CarouselComponent,
    Footer,
    Modal,
    FormEmail
} from '../../components';
import Carousel from 'react-elastic-carousel'
import { ToolsDesign } from '../../assets/data/design'

//Local Components
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import ModalSection from './components/ModalSection';

const Design = () => {

    const [isOpen, setIsOpen] = useState(false);

    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);


    return (
        <div className={styles.body_design}>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <ModalSection />
                <Carousel
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    focusOnSelect={true}
                    transitionMs={2000}
                >
                    {ToolsDesign.map(item => {
                        return (
                            <CarouselComponent key={item.id} src={item.image} alt={item.title} />
                        )
                    })}
                </Carousel>
            </Modal>

            <CascatleTitle text={"Design"} />

            <div className={styles.video_design}>
                <HeroVideo videoSrc={video} />
            </div>

            <MainSection />
            <div className={styles.container_carousel}>
                <Carousel
                    enableAutoPlay={true}
                    autoPlaySpeed={2000}
                    focusOnSelect={true}
                    transitionMs={2000}
                >
                    {ToolsDesign.map(item => {
                        return (
                            <CarouselComponent key={item.id} src={item.image} alt={item.title} />
                        )
                    })}
                </Carousel>

            </div>

            <InfoSection />

            <div onClick={() => setIsOpen(true)} className={styles.button_modaldesign}>
                Como trabalhamos?
            </div>

            <div className={styles.divider_design}></div>

            <FormEmail />

            <Footer />
        </div>
    )
}

export default Design;