import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBuilding, faGavel, faBullhorn} from '@fortawesome/free-solid-svg-icons';
import './styles/InfoSections.css';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function InfoSections() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t}=useTranslation()
    return (
        <div className="info-sections">
            <div className="info-item">
                <h2>
                    <FontAwesomeIcon icon={faBuilding} className="info-icon"/>
                    <Link to="/ministry" className="info-link" onClick={handleLinkClick}>{t("infoSections.h1")}</Link>
                </h2>
            </div>
            <div className="vertical-line"></div>
            <div className="info-item">
                <h2>
                    <FontAwesomeIcon icon={faGavel} className="info-icon"/>
                    <Link to="/resources/laws" className="info-link" onClick={handleLinkClick}>{t("infoSections.h2")}</Link>
                </h2>
            </div>
            <div className="vertical-line"></div>
            <div className="info-item">
                <h2>
                    <FontAwesomeIcon icon={faBullhorn} className="info-icon"/>
                    <Link to="resources/public-acquisitions" className="info-link" onClick={handleLinkClick}>{t("infoSections.h3")}</Link>
                </h2>
            </div>
        </div>
    );
}

export default InfoSections;
