import styles from './styles.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer, FormBudget } from '../../components';
import InfoSection from './components/InfoSection';
import ContactSection from './components/ContactSection';

const Landing = () => {
    const routePath = useLocation();

    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return (
        <div className={styles.body}>
            <InfoSection />
            <FormBudget />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default Landing;