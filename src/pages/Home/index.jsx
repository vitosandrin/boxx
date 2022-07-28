import styles from './styles.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Global Components
import {
    Footer, FormBudget, FormEmail
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
            <div className={styles.divider_home} />
            <ServiceSection />
            <div className={styles.divider_home} />
            <SolutionSection />
            <FormEmail />
            <Footer />
        </div>
    )
}

export default Home;