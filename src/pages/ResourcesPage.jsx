import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ResourcesPage.css';
import HeroOtherPages from "../components/HeroOtherPages.jsx";
import res from '../resources.json';
import {useTranslation} from "react-i18next"; // Import JSON data

const ResourcesPage = () => {
    const { page } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate fetching from imported JSON
                const result = res[page] || [];
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page]);
    const createMarkup = (text) => {
        return { __html: text.replace(/\n/g, '<br />').replace(/\n\n/g, '</p><p>') };
    };
    const {t,i18n} = useTranslation()
    console.log(page)
    return (
        <>
            <HeroOtherPages title={t(`resourcesTitles.${page}`).toUpperCase()} />

            <div className="resources-page">
                {/*<h1>{page.replace(/_/g, ' ').toUpperCase()}</h1>*/}
                {data.map(item => (
                    <div key={item.id} className="resource-item">
                        <div className="resource-details">
                            <h2>{item.title[i18n.language]}</h2>
                            <p dangerouslySetInnerHTML={createMarkup(item.description[i18n.language])}></p>
                            {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer">{t('global.more')}</a>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ResourcesPage;
