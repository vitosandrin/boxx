import './styles.css'
import video from '../../assets/video/design1.webm'

//Global Components
import {
    CascatleTitle,
    HeroVideo,
    CarouselComponent,
    Box,
    ContactForm,
    Footer
} from '../../components';
import Carousel from 'react-elastic-carousel'
import { ToolsDesign } from '../../assets/data/design'

//Local Components
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';

const Design = () => {

    const description = "Prezamos pela autenticidade e originalidade de sua marca, prototipamos projetos únicos e especialmente planejados para suprir necessidades básicas do visual da sua empresa."

    return (
        <div className="body_design">
            <CascatleTitle text={"Design"} />
            <div className="video_design">
                <HeroVideo videoSrc={video} />
            </div>
            <div className="divider_design"></div>
            <MainSection />
            <InfoSection />
            <div className="divider_design"></div>
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
            <Box title={"Saiba Mais"} description={description} />
            <div className="divider_design"></div>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Design;