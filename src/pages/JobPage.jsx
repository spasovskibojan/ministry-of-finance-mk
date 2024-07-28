import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './styles/JobPage.module.css';
import {useTranslation} from "react-i18next";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../config/firebase.js";

const JobPage = ({ deleteJob }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const job = useLoaderData();
    console.log("job:",job)
    const {t}=useTranslation()
    const onDeleteClick = (jobId) => {
        const confirm = window.confirm(
            "Are you sure you want to delete this listing?"
        );

        if (!confirm) return;
        console.log("jobId:",jobId)
        deleteJob(jobId);

        toast.success('Job deleted successfully');
        navigate('/services/jobs');
        handleLinkClick()
    };
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const user = auth?.currentUser?.email;

    return (
        <>
            <div className={styles.globalDiv}>
                <section className={styles.backArrowSect}>
                    <div>
                        <Link to='/services/jobs'>
                            <FaArrowLeft style={{marginRight: '0.5rem'}}/> {t('jobs.backJob')}
                        </Link>
                    </div>
                </section>

                <section className={styles.sectContainer}>
                    <div className={styles.container}>
                        <div className={styles.jobDetails}>
                            <main>
                                <div className={styles.jobCard}>
                                    <div className={styles.jobType}>{job.type}</div>
                                    <h1 className={styles.jobTitle} style={{textAlign:"left"}}>{job.title}</h1>
                                    <div className={styles.jobLocation} >
                                        <FaMapMarker style={{marginRight: '0.5rem'}}/>
                                        <p>{job.location}</p>
                                    </div>
                                </div>

                                <div className={styles.jobCard}>
                                    <h3 className={styles.jobDescriptionTitle}>{t('jobs.jobDesc')}</h3>
                                    <p className={styles.jobDescription}>{job.description}</p>
                                    <h3 className={styles.salaryTitle}>{t('jobs.salary')}</h3>
                                    <p className={styles.salary}>{job.salary} {t('jobs.year')}</p>
                                </div>
                            </main>

                            <aside>
                                <div className={styles.companyInfoCard}>
                                    <h3 className={styles.companyInfoTitle}>{t('jobs.company')}</h3>
                                    <h2 className={styles.companyName}>{job.company.name}</h2>
                                    <p className={styles.companyDescription}>{job.company.description}</p>
                                    <hr/>
                                    <h3 className={styles.contactTitle}>{t('jobs.mail')}</h3>
                                    <p className={styles.contactDetail}>{job.company.contactEmail}</p>
                                    <h3 className={styles.contactTitle}>{t('jobs.phone')}</h3>
                                    <p className={styles.contactDetail}>{job.company.contactPhone}</p>
                                </div>

                                {user && (
                                    <div className={styles.manageJobCard}>
                                        <h3 className={styles.manageJobTitle}
                                            style={{textAlign: "center"}}>{t('jobs.manageJob')}</h3>
                                        <Link to={`/services/edit-job/${id}`} className={styles.editJobLink}
                                              onClick={handleLinkClick}>
                                            {t('jobs.editJob')}
                                        </Link>
                                        <button
                                            onClick={() => onDeleteClick(id)}
                                            className={styles.deleteJobButton}
                                        >
                                            {t('jobs.deleteJob')}
                                        </button>
                                    </div>
                                )}
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
const jobLoader = async ({params}) => {
    const docRef = doc(db, "jobs", params.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such document!");
    }
};

export {JobPage as default, jobLoader};

// const jobLoader = async ({ params }) => {
//     console.log(params.id); // Ensure ID is logged correctly
//     const res = await fetch(`/jobs-api/jobs/${params.id}`);
//     const data = await res.json();
//     return data;
// };
