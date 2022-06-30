import './styles.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import video from '../../assets/video/design1.webm'

//Global Components
import {
    CascatleTitle,
    HeroVideo,
    CarouselComponent,
    ContactForm,
    Footer,
    Modal
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
        <div className="body_design">
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
            
            <div className="video_design">
                <HeroVideo videoSrc={video} />
            </div>
            <div className="divider_design"></div>

            <MainSection />

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

            <InfoSection />

            <div className="divider_design"></div>

            <div onClick={() => setIsOpen(true)} className="button_modaldesign">
                Como trabalhamos?
            </div>

            <div className="divider_design"></div>

            <ContactForm />

            <Footer />
        </div>
    )
}

export default Design;