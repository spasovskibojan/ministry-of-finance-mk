import './styles/InfoCards.css';
import statisticsImg from '../assets/images/statistics.png'; // Ensure you have the image in the specified path
import reformsImg from '../assets/images/reforms.png';
import projectsImg from '../assets/images/projects.png';
import publicationsImg from '../assets/images/publications.png';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function InfoCards() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t} = useTranslation()
    return (
        <div className="info-cards">
            <div className="card" style={{ backgroundColor: '#ADD8E6' }}>
                <img src={statisticsImg} alt="Statistics" className="card-image" />
                <Link to="/resources/statistics" className="card-heading" onClick={handleLinkClick}>{t("infoCards.c1.link")}</Link>
                <p className="card-text">{t("infoCards.c1.text")}</p>
            </div>
            <div className="card" style={{ backgroundColor: '#76b6d0' }}>
                <img src={reformsImg} alt="Reforms" className="card-image" />
                <Link to="/resources/reforms" className="card-heading" onClick={handleLinkClick}>{t("infoCards.c2.link")}</Link>
                <p className="card-text">{t("infoCards.c2.text")}</p>
            </div>
            <div className="card" style={{ backgroundColor: '#4682B4' }}>
                <img src={projectsImg} alt="Projects" className="card-image" />
                <Link to="/resources/projects" className="card-heading" onClick={handleLinkClick}>{t("infoCards.c3.link")}</Link>
                <p className="card-text">{t("infoCards.c3.text")}</p>
            </div>
            <div className="card" style={{ backgroundColor: '#1E90FF' }}>
                <img src={publicationsImg} alt="Publications and Posts" className="card-image" />
                <Link to="/resources/publications-and-posts" className="card-heading" onClick={handleLinkClick}>{t("infoCards.c4.link")}</Link>
                <p className="card-text">{t("infoCards.c4.text")}</p>
            </div>
        </div>
    );
}

export default InfoCards;
