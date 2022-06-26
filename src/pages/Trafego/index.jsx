import './styles.css'
import videomkt from '../../assets/video/trafego.webm'

//Global Components
import {
    HeroVideo,
    Box,
    ContactForm,
    CascatleTitle,
    Footer,
    CarouselComponent
} from '../../components'

import Carousel from 'react-elastic-carousel'
import { ToolsMkt } from '../../assets/data/trafego'

//Local Components
import InfoSection from './components/InfoSection'
import MainSection from './components/MainSection'

const Trafego = () => {

    const description = "A .boxx é capaz de encontrar e conectar todos potenciais exploráveis singularmente em cada caso.Somos uma empresa que gera autonomia e independência.Nosso foco está em objetividade e qualidade de execução."

    return (
        <div className="body_mkt">
            <CascatleTitle text={"Tráfego"} />
            <div className="video_mkt">
                <HeroVideo videoSrc={videomkt} />
            </div>
            <div className="divider"></div>
            <MainSection />
            <InfoSection />
            <div className="divider"></div>
            <Carousel
                enableAutoPlay={true}
                autoPlaySpeed={2000}
                focusOnSelect={true}
                transitionMs={2000}
            >
                {ToolsMkt.map(item => {
                    return (
                        <CarouselComponent key={item.id} src={item.image} alt={item.title} />
                    )
                })}
            </Carousel>
            <Box title={"Saiba Mais"} description={description} />
            <div className="divider"></div>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Trafego;