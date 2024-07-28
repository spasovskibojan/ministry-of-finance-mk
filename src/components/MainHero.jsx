import './styles/MainHero.css'
import  zgrada from '../assets/images/zgrada.jpg'
import NewsListings from "./NewsListings.jsx";
import {useTranslation} from "react-i18next";

const MainHero = () => {
    const { t } = useTranslation()
    return (
        <div className="main-hero">
            <div className="left-section">
                <img src={zgrada} alt="Hero" className="hero-image" height={'400px'}/>
                <div className="overlay-text">
                    <h1>{t("greeting")}</h1>
                    <p>{t("greetingSubtitle")}</p>
                </div>
            </div>
            <NewsListings isHome={true}/>
        </div>
    );
};

export default MainHero;
