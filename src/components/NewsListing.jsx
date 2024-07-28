import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import news1 from '../assets/images/news/img1.jpg';
import news2 from '../assets/images/news/img2.jpg';
import news3 from '../assets/images/news/img3.jpg';
import news4 from '../assets/images/news/img4.jpg';
import news5 from '../assets/images/news/img5.jpg';
import news6 from '../assets/images/news/img6.jpg';
import news7 from '../assets/images/news/img7.jpg';

const imageMap = {
    'img1': news1,
    'img2': news2,
    'img3': news3,
    'img4': news4,
    'img5': news5,
    'img6': news6,
    'img7': news7,
};

const NewsListing = ({ newsItem }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = newsItem.description[i18n.language];
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br />').replace(/\n\n/g, '</p><p>') };
    };

    const { t } = useTranslation();

    // Construct the image source dynamically based on the newsItem.img value
    const imgSource = imageMap[`img${newsItem.id}`];

    return (
        <>
            <div className="news-item">
                <div className="news-content-container">
                    {imgSource && <img src={imgSource} alt={`News ${newsItem.id}`} className="image-thumbnail" />}
                    <h3>{newsItem.title[i18n.language]}</h3>
                </div>
                <p dangerouslySetInnerHTML={createMarkup(description)}></p>
                <div className={'btnDescriptionDiv'}>
                    <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
                        {showFullDescription ? t("global.less") : t("global.more")}
                    </button>
                </div>
                <br />
                <Link to={`/news/${newsItem.id}`} onClick={handleLinkClick}>{t("global.readMore")}</Link>
            </div>
            <hr />
        </>
    );
};

export default NewsListing;
