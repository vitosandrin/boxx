import './styles.css';
//Global Components
import { ContactForm, Footer } from "../../components";

// Local Components
import TopSection from "./components/TopSection";
import MainSection from "./components/MainSection";
import IntroductionSection from "./components/IntroductionSection";
import ServiceSection from "./components/ServiceSection";

const Home = () => {
    return (
        <div className="body_home">
            <TopSection />
            <div className="divider_home"/>
            <MainSection />
            <IntroductionSection />
            <div className="divider_home"/>
            <ServiceSection />
            <div className="divider_home"/>
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home;