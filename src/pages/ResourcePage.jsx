import HeroOtherPages from "../components/HeroOtherPages.jsx";
import './styles/ResourcePage.css'
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
const ResourcePage = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t}=useTranslation()
    return (
        <>
            <HeroOtherPages title={t('resourcePage.heroTitle')} subtitle={t('resourcePage.heroSubtitle')}/>
            <div className={'resDivBig'}>
                <h1>{t('resourcePage.h1')}</h1>
                <ul>
                    <li><Link to="/resources/statistics" onClick={handleLinkClick}>{t('resourcePage.l1')}</Link></li>
                    <li><Link to="/resources/reforms" onClick={handleLinkClick}>{t('resourcePage.l2')}</Link></li>
                    <li><Link to="/resources/projects" onClick={handleLinkClick}>{t('resourcePage.l3')}</Link></li>
                    <li><Link to="/resources/publications-and-posts" onClick={handleLinkClick}>{t('resourcePage.l4')}</Link></li>
                    <li><Link to="/resources/public-acquisitions" onClick={handleLinkClick}>{t('resourcePage.l5')}</Link></li>
                    <li><Link to="/resources/laws" onClick={handleLinkClick}>{t('resourcePage.l6')}</Link></li>
                </ul>
            </div>
        </>
    );
};

export default ResourcePage;
