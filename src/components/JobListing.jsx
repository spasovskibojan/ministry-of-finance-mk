import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/JobListing.module.css';
import {useTranslation} from "react-i18next";

const JobListing = ({ job }) => {
    let description = job.description;
    const [showFullDescription, setShowFullDescription] = useState(false);
    if (!showFullDescription) {
        description = description.substring(0, 90) + '...';
    }
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
    const {t}=useTranslation()

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.mb6}>
                    <div className={styles.textGray}>{job.type}</div>
                    <h3 className={styles.heading}>{job.title}</h3>
                </div>

                <div className={styles.mb5}>{description}</div>

                <button
                    onClick={() => setShowFullDescription((prevState) => !prevState)}
                    className={styles.button}
                >
                    {showFullDescription ? t("global.less") : t("global.more")}
                </button>

                <h3 className={styles.salary}>{job.salary} / Year</h3>

                <div className={styles.divider}></div>

                <div className={styles.flexContainer}>
                    <div className={styles.location}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.mapMarker} />
                        {job.location}
                    </div>
                    <Link
                        to={`/services/jobs/${job.id}`}
                        className={styles.link}
                        onClick={handleLinkClick}
                    >
                        {t('global.readMore')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobListing;
