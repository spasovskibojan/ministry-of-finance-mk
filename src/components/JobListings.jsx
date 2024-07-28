import {useEffect, useState} from 'react';
import Spinner from "./Spinner.jsx";
import JobListing from "./JobListing.jsx";
import styles from './styles/JobListings.module.css';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {auth, db} from '../config/firebase.js'
import {collection, getDocs} from "firebase/firestore";
const JobListings = ({isServices = false}) => {
    const [loading, setLoading] = useState(true);

    const [jobs, setJobs] = useState([]);

    const jobsCollectionRef = collection(db, "jobs")
    useEffect(() => {
        const getJobs = async () => {
            try{
                const data = await getDocs(jobsCollectionRef)
                const filteredData = data.docs.map((doc) =>({
                    ...doc.data(),
                    id:doc.id
                }))
                // console.log("id of job: ",filteredData[1].id)
                setJobs(filteredData)
            } catch (err){
                console.error(err)
            } finally {
                setLoading(false)
            }
        }
        getJobs()
    },[])


    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t} = useTranslation()
    const user = auth?.currentUser?.email;

    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>
                        {t('jobs.browseJobs')}
                    </h2>

                    {loading ? (
                        <Spinner loading={loading}/>
                    ) : (
                        <div className={styles.jobsMapping}>
                            {isServices ?
                                (
                                jobs.slice(0,3).map((job) => (
                                        <JobListing key={job.id} job={job}/>
                                    ))
                                ) :
                                (
                                jobs.map((job) => (
                                        <JobListing key={job.id} job={job}/>
                                    ))
                                )
                            }
                        </div>
                    )}
                </div>
            </section>


                <div className={styles.AddJobDiv}>
                    {
                        user &&
                        <Link to={'/services/add-job'} onClick={handleLinkClick}
                              className={styles.AddJobLink}>{t('jobs.addJob')}</Link>
                    }
                    {
                        isServices && (
                            <Link to={'/services/jobs'} onClick={handleLinkClick}
                                  className={styles.AddJobLink}>{t('global.readMoreJobs')}</Link>
                        )
                    }
                </div>

        </>
    );
};

export default JobListings;


// FETCH DATA FROM SERVER
// useEffect(() => {
//     const fetchJobs = async () => {
//         const apiUrl = '/jobs-api/jobs';
//         try {
//             const res = await fetch(apiUrl);
//             const data = await res.json();
//             setJobs(data);
//         } catch (error) {
//             console.log('Error fetching data', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     fetchJobs();
// }, []);