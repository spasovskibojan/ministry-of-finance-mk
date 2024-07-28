// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
import MainHero from "../components/MainHero.jsx";
import FiscalCounter from "../components/FiscalCounter.jsx";
import InfoCards from "../components/InfoCards.jsx";
import InfoSections from "../components/InfoSections.jsx";
import MinisterProfile from "../components/MinisterProfile.jsx";
import MojDDV from "../components/MojDDV.jsx";

const HomePage = () => {
    return (
        <>
            <MainHero />
            <FiscalCounter />
            <InfoCards />
            <InfoSections />
            <MinisterProfile />
            <MojDDV />
        </>
    );
};

export default HomePage;
