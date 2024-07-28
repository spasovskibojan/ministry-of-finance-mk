import heroSlika from "../assets/images/slikaZaDrugiStranici.jpg";

const HeroOtherPages = ({title, subtitle}) => {
    return (
        <>
            <div className="HeroSection">
                <img src={heroSlika} alt="Slika" className={'heroPhoto'}/>
                <div className="overlayText">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </>
    );
};

export default HeroOtherPages;
