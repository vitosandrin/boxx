import styles from './styles.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import planet from '../../assets/json/planet.json'
import star from '../../assets/json/star.json'
//Global Components
import {
    Footer, FormBudget, FormEmail, Loader
} from "../../components";

// Local Components
import TopSection from "./components/TopSection";
import MainSection from "./components/MainSection";
import IntroductionSection from "./components/IntroductionSection";
import ServiceSection from "./components/ServiceSection";
import SolutionSection from './components/SolutionSection';
import AboutSection from './components/AboutSection';

const Home = () => {
    const routePath = useLocation();

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return (
        <div className={styles.body_home}>
            <TopSection />
            <MainSection />
            <IntroductionSection />
            <AboutSection />
            <FormBudget />
            <Loader data={planet} />
            <ServiceSection />
            <div className={styles.divider_home} />
            <SolutionSection />
            <FormEmail />
            <Footer />
        </div>
    )
}

export default Home;