// import news from '../news.json'
import NewsListing from './NewsListing.jsx'
import ViewAllNews from "./ViewAllNews.jsx";
import {useState, useEffect} from "react";
import Spinner from "./Spinner.jsx";
import {useTranslation} from "react-i18next";
import { db } from '../config/firebase.js'
import {getDocs, collection} from 'firebase/firestore'
const NewsListings = ({isHome = false}) => {
    const rightDivClass = isHome ? "rightSection" : "newsPageSection";
    const [loading, setLoading] = useState(true);

    // NOVO !!!
    const [news, setNews] = useState([])
    const newsCollectionRef = collection(db, "news")
    useEffect(() => {
        const getNews = async () => {
            try{
                const data = await getDocs(newsCollectionRef)
                const filteredData = data.docs.map((doc) =>({
                    ...doc.data(),
                        id:doc.id
                }))
                setNews(filteredData)
            } catch (err){
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getNews()
    },[])

    const {t} = useTranslation()

    return (
        <div className={`${rightDivClass}`}>
            <h1 className={'recent-news-news'}>{isHome ? t('news.homeNewsTitle') : t('news.otherNewsTitle')}</h1>
            {loading ? (<Spinner loading={loading}/>) : (
                <>
                    {isHome &&
                        news.slice(0, 3).map((newsItem) => (
                            <NewsListing key={newsItem.id} newsItem={newsItem} />
                        ))
                    }
                    {!isHome &&
                        news.map((newsItem) => (
                            <NewsListing key={newsItem.id} newsItem={newsItem} />
                        ))
                    }
                    {isHome && <ViewAllNews />}
                </>
            )}

        </div>
    );
};

export default NewsListings;

// FATCHING DATA FROM JSON SERVER
// const [news, setNews] = useState([]);
// useEffect(() => {
//     const fetchNews = async () => {
//         const apiUrl = isHome ? '/api/news?_limit=4' : '/api/news'
//         try {
//             const res = await fetch(apiUrl)
//             const data = await res.json();
//             setNews(data);
//         } catch (error) {
//             console.log('Error fetching data', error)
//         } finally {
//             setLoading(false)
//         }
//     }
//     fetchNews()
// }, []);