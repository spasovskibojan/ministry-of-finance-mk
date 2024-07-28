import NewsListings from "../components/NewsListings.jsx";
import HeroOtherPages from "../components/HeroOtherPages.jsx";
import './styles/NewsPage.css'
import {useTranslation} from "react-i18next";
const NewsPage = () => {
    const {t} = useTranslation()
    return (
        <div className={'NewsDiv'}>
            <HeroOtherPages title={t('news.newsPageTitle')} subtitle={t('news.newsPageSubtitle')}/>
            <NewsListings/>
        </div>
    );
};

export default NewsPage;
