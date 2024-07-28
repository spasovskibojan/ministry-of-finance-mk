import HeroOtherPages from "../components/HeroOtherPages.jsx";
import { useTranslation } from "react-i18next";
import JobListings from "../components/JobListings.jsx";
import EServices from "../components/EServices.jsx";
const ServicesPage = () => {

    const { t } = useTranslation();
    return (
        <>
            <HeroOtherPages title={t("servicesPage.title")} subtitle={t("servicesPage.subtitle")} />
            <JobListings isServices={true} />
            <EServices />
        </>
    );
};

export default ServicesPage;
