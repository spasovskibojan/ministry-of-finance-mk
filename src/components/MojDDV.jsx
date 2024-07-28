import styles from './styles/MojDDV.module.css'; // Import the CSS module
import img1 from '../assets/images/mojDDV1.jpg';
import {Link} from "react-router-dom"; // Replace with the actual path to the image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";
const MojDDV = () => {
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.leftDiv}>
                    <h1 className={styles.largeHeading}>#МојДДВ</h1>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar}>
                            <div className={styles.progress}></div>
                        </div>
                    </div>
                    <h3 className={styles.smallHeading}>{t('mojDDV.h3')}</h3>
                    <p className={styles.paragraph} >{t('mojDDV.p1')}</p>
                    <p className={styles.paragraph}>{t('mojDDV.p2')}</p>
                    <Link to={'https://play.google.com/store/apps/details?id=mk.accent.vatret&hl=mk'} target={'_blank'} className={styles.downloadButton}>Download Application <FontAwesomeIcon icon={faDownload} /></Link> {/* Kako <a> go stavi */}
                </div>
                <div className={styles.imagesDiv}>
                    <img src={img1} alt="First" className={styles.image1} />
                </div>
            </div>
        </div>
    );
};

export default MojDDV;
