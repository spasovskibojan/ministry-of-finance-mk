import HeroOtherPages from "../components/HeroOtherPages.jsx";
import './styles/ResourcePage.css'
import {useTranslation} from "react-i18next";
const ResourcePage = () => {
    const {t}=useTranslation()
    return (
        <>
            <HeroOtherPages title={t('resourcePage.heroTitle')} subtitle={t('resourcePage.heroSubtitle')}/>
            <div className={'resDivBig'}>
                <h1>{t('resourcePage.h1')}</h1>
                <ul>
                    <li><a href="/resources/statistics">{t('resourcePage.l1')}</a></li>
                    <li><a href="/resources/reforms">{t('resourcePage.l2')}</a></li>
                    <li><a href="/resources/projects">{t('resourcePage.l3')}</a></li>
                    <li><a href="/resources/publications-and-posts">{t('resourcePage.l4')}</a></li>
                    <li><a href="/resources/public-acquisitions">{t('resourcePage.l5')}</a></li>
                    <li><a href="/resources/laws">{t('resourcePage.l6')}</a></li>
                </ul>
            </div>
        </>
    );
};

export default ResourcePage;
