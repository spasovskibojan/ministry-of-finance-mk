import styles from './styles/Footer.module.css'; // Import the CSS module
import ministryLogo from '../assets/images/Logo.png'; // Replace with the actual path to the logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t} = useTranslation()
    return (
        <>
                <div className={styles.arrowUpDiv}>
                    <Link to="#top" onClick={scrollToTop} className={styles.goUp}>
                        <FontAwesomeIcon icon={faChevronUp} className={`${styles.icon} fa-2x`} />
                    </Link>
                </div>
            <footer className={styles.footer}>
                <div className={styles.logoContainer}>
                    <Link to="#top" onClick={scrollToTop}><img src={ministryLogo} alt="Ministry Logo" className={styles.logo}/></Link>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.column}>
                        <p>{t('footer.part1.p1')}</p>
                        <p>{t('footer.part1.p2')}</p>
                        <p>{t('footer.part1.p3')}</p>
                        <p>{t('footer.part1.p4')}</p>
                        <p>{t('footer.part1.p5')}</p>
                        <p>{t('footer.part1.p6')}</p>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('footer.part2.h1')}</h3>
                        <ul>
                            <li><Link to="https://vlada.gov.mk/" target={"_blank"}>{t('footer.part2.p1')}</Link></li>
                            <li><Link to="https://www.customs.gov.mk/pocetna.nspx" target={"_blank"}>{t('footer.part2.p2')}</Link></li>
                            <li><Link to="http://ujp.gov.mk/" target={"_blank"}>{t('footer.part2.p3')}</Link></li>
                            <li><Link to="https://finpol.gov.mk/" target={"_blank"}>{t('footer.part2.p4')}</Link></li>
                            <li><Link to="http://www.bjn.gov.mk/" target={"_blank"}>{t('footer.part2.p5')}</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>{t('footer.part3.h1')}</h3>
                        <ul>
                            <li><Link to="/services"onClick={handleLinkClick}>{t('footer.part3.p1')}</Link></li>
                            <li><Link to="/services/jobs"onClick={handleLinkClick}>{t('footer.part3.p3')}</Link></li>
                            <li><Link to="/contact"onClick={handleLinkClick}>{t('footer.part3.p4')}</Link></li>
                            {/*<li><Link to="#"onClick={handleLinkClick}>{t('footer.part3.p2')}</Link></li>*/}
                            {/*<li><Link to="#"onClick={handleLinkClick}>{t('footer.part3.p5')}</Link></li>*/}
                            {/*<li><Link to="#"onClick={handleLinkClick}>{t('footer.part3.p6')}</Link></li>*/}
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.credentials}>
                <span>&copy;{t('footer.credentials')}</span>
            </div>
        </>
    );
};

export default Footer;
