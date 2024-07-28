import ministryData from '../ministers.json'
import './styles/MinisterPage.css';
import {useEffect, useState} from "react";
import HeroOtherPages from "../components/HeroOtherPages.jsx";
import {useTranslation} from "react-i18next";
import ministerImage from '../assets/images/ministerka.jpg'
import deputyMinisterImage from '../assets/images/zamenik.jpg'
const MinisterPage = ({role}) => {
    const data = ministryData.find((minister) => minister.type === role);

    // Koga ja build aplikacijata ne mi dava dinamicki dodavanje sliki
    // const [imageSource, setImageSource] = useState(null);
    //
    // useEffect(() => {
    //     const importImage = async () => {
    //         const imagePath = `../assets/images/${data.image}`;
    //         console.log("i ",data.image)
    //         const image = await import(imagePath);
    //         setImageSource(image.default);
    //     };
    //     importImage();
    // }, [data.image]);

    if (!data) {
        return <div>Page not found</div>;
    }
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br />').replace(/\n\n/g, '</p><p>') };
    };
    const {t,i18n} = useTranslation()
    return (
        <>
            <HeroOtherPages title={data.title[i18n.language]}/>

            <div className="minister-profile">
                <div className="profile-container">
                    <div className="profile-image">
                        {/*{imageSource && <img src={imageSource} alt="Image"/>}*/}
                        { data.role == "Minister of Finance" ?
                            (<img src={ministerImage} alt="Image"/>)
                            :
                            ( <img src={deputyMinisterImage} alt="Image"/>)
                        }
                    </div>
                    <div className="profile-details">
                        <h2>{data.name[i18n.language]}</h2>
                        <p>{data.role[i18n.language]}</p>
                    </div>
                </div>
                <div className="biography">
                    <p dangerouslySetInnerHTML={createMarkup(data.description[i18n.language])}></p>
                </div>
            </div>
        </>
    );
};

export default MinisterPage;
