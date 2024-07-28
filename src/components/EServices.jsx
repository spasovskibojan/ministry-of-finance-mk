import styles from "../pages/styles/ServicesPage.module.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const EServices = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const { t } = useTranslation();
    return (
        <div className={styles.globbbal}>
            <h1 className={styles.h11}>{t('servicesPage.otherServices')}</h1>
            <div className={styles.otherServices}>
                <div>
                    <Link to={'https://e-trezor.finance.gov.mk/eobvrski/home.seam'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l1')}</Link>
                </div>
                <div>
                    <Link to={'https://ecirkular.finance.gov.mk/'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l2')}</Link>
                </div>
                <div>
                    <Link to={'https://e-aukcii.finance.gov.mk/'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l3')}</Link>
                </div>
                <div>
                    <Link to={'https://fama.finance.gov.mk/index.action'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l4')}</Link>
                </div>
                <div>
                    <Link to={'https://peo.finance.gov.mk/'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l5')}</Link>
                </div>
                <div>
                    <Link to={'https://e-presudi.finance.gov.mk/'} target={"_blank"}
                          onClick={handleLinkClick}>{t('servicesPage.l6')}</Link>
                </div>
            </div>
        </div>
    );
};

export default EServices;
