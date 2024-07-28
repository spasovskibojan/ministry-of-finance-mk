import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const ViewAllNews = () => {
    const {t}=useTranslation()
    return (
        <div className={'viewAllNewsDiv'}>
            <Link to="/news">{t("news.viewAllNews")}</Link>
        </div>
    );
};

export default ViewAllNews;
