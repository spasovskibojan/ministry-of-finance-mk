import {useParams, useLoaderData, Link} from "react-router-dom";
import MojDDV from "../components/MojDDV.jsx";
import {useEffect, useState} from "react";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

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
const NewsPageItem = () => {
    const { id } = useParams()
    const newsItem = useLoaderData()

    // const [imageSource, setImageSource] = useState(null);
    // useEffect(() => {
    //     const importImage = async () => {
    //         try {
    //             const image = await import(`../assets/images/news/${newsItem.img}`);
    //             setImageSource(image.default);
    //         } catch (err) {
    //             console.error("Error importing image:", err);
    //         }
    //     };
    //
    //     if (newsItem && newsItem.img) {
    //         importImage();
    //     }
    // }, [newsItem]);

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const createMarkup = (text) => {
        // Replace double newlines with paragraph tags
        const formattedText = text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />');
        return { __html: `<p>${formattedText}</p>` }; // Wrap the content in a <p> for proper formatting
    };

    const {t,i18n} = useTranslation()
    const imgSource = imageMap[newsItem.img.slice(0,4)];
    return (
        <div className={'NewsDiv'}>
            <div className="HeroSection">
                {/*{<img src={imageSource} alt="Image" className="heroPhoto" />}*/}
                {imgSource && <img src={imgSource} alt="Image" className="heroPhoto" />}
                <div className="overlayText">
                    <h1>{newsItem.title[i18n.language]}</h1>
                </div>
                <Link to={'/news'}>| {t('news.otherNewsTitle')} |</Link>
                <p dangerouslySetInnerHTML={createMarkup(newsItem.description[i18n.language])}></p>
            </div>
            <div className={'backLinks'}>
                <Link to={'/'} className={'nplinks'} onClick={handleLinkClick}>{t('global.home')}</Link>
                <Link to={'/news'} className={'nplinks'} onClick={handleLinkClick}>{t('news.otherNewsTitle')}</Link>
            </div>
            <MojDDV />
        </div>
    );
};

const newsItemLoader = async ({ params }) => {
    const docRef = doc(db, "news", params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such document!");
    }
};
export {NewsPageItem as default, newsItemLoader};

// const newsItemLoader = async ({params}) => {
//     const res = await fetch(`/api/news/${params.id}`)
//     const data = await res.json()
//     return data
// }



// import Spinner from "../components/Spinner.jsx";
// import NewsListings from "../components/NewsListings.jsx";
// import {useState, useEffect} from "react";

// const [newsItem, setNewsItem] = useState(null)
// const [loading, setLoading] = useState(true)

// useEffect(() => {
//     const fetchNews = async () => {
//         try {
//             const res = await fetch(`/api/news/${id}`)
//             const data = await res.json();
//             setNewsItem(data);
//         } catch (error) {
//             console.log('Error fetching data', error)
//         } finally {
//             setLoading(false)
//         }
//     }
//     fetchNews()
// }, []);