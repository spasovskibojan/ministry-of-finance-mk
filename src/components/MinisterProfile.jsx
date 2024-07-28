import styles from './styles/MinisterProfile.module.css';
import ministerImage from '../assets/images/ministerka.jpg'; // Replace with the actual path to the image
import newsImage1 from '../assets/images/news/img1.jpg'; // Replace with the actual path to the news images
import newsImage2 from '../assets/images/news/img2.jpg';
import newsImage3 from '../assets/images/news/img3.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import News from "../news.json"
import {useTranslation} from "react-i18next";
import {newsItemLoader} from "../pages/NewsPageItem.jsx";

const newsImages = {
    1: newsImage1,
    2: newsImage2,
    3: newsImage3
};

// Extract and map the first three news items from the JSON data
const newsData = News.news.slice(0, 3).map(newsItem => ({
    id: newsItem.id,
    date: newsItem.date,
    title: {
        en:newsItem.title["en"],
        mk:newsItem.title["mk"]
    },
    image: newsImages[newsItem.id] || ''
}));
const MinisterProfile = () => {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };

    const handleNextClick = () => {
        setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };

    const currentNews = newsData[currentNewsIndex];
    const {t,i18n} = useTranslation()
    return (
        <div className={styles.ministerProfile}>
            <div className={styles.leftSection}>
                <h2><a href="/ministry/minister-of-finance"
                       style={{textDecoration: 'none', color: 'black'}}>{t('ministerProfile.name')}</a></h2>
                <p>{t('ministerProfile.role')}</p>
                <img src={ministerImage} alt="Minister" className={styles.ministerImage}/>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.newsItem} style={{backgroundImage: `url(${currentNews.image})`}}>
                    <div className={styles.newsContent}>
                        <h2 className={styles.newsDate}>{currentNews.date}</h2>
                        <p className={styles.newsDescription}>{currentNews.title[i18n.language]}</p>
                    </div>
                    <div className={styles.navigation}>
                        <div className={styles.navArrows}>
                            <FontAwesomeIcon icon={faArrowLeft} className={styles.navArrow} onClick={handlePrevClick}/>
                            <FontAwesomeIcon icon={faArrowRight} className={styles.navArrow} onClick={handleNextClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinisterProfile;