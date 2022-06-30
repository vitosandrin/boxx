import './styles.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Global Components
import {
    Footer
} from "../../components";

// Local Components
import TopSection from "./components/TopSection";
import MainSection from "./components/MainSection";
import IntroductionSection from "./components/IntroductionSection";
import ServiceSection from "./components/ServiceSection";
import SolutionSection from './components/SolutionSection';

const Home = () => {
    const routePath = useLocation();

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return (
        <div className="body_home">
            <TopSection />
            <div className="divider_home" />
            <MainSection />
            <IntroductionSection />
            <div className="divider_home" />
            <ServiceSection />
            <div className="divider_home" />
            <SolutionSection />
            <Footer />
        </div>
    )
}

export default Home;