import {useState} from 'react';
import styles from './styles/AddDeleteJobPage.module.css';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {auth} from '../config/firebase.js'

const AddJobPage = ({addJobSubmit}) => {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Under $50K');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
            userId: auth?.currentUser?.uid,
        };
        addJobSubmit(newJob);

        toast.success('Job Added Successfully')

        return navigate('/services/jobs')
    };
    const {t} = useTranslation()

    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form onSubmit={submitForm}>
                        <h2 className={styles.title}>{t('jobs.addJob')}</h2>

                        <div className={styles.field}>
                            <label htmlFor="type" className={styles.label}>
                                {t('jobs.type')}
                            </label>
                            <select
                                id="type"
                                name="type"
                                className={styles.input}
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Full-Time">{t('jobs.forms.fullTime')}</option>
                                <option value="Part-Time">{t('jobs.forms.partTime')}</option>
                                <option value="Remote">{t('jobs.forms.remote')}</option>
                                <option value="Internship">{t('jobs.forms.internship')}</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t('jobs.listingName')}</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className={styles.input}
                                placeholder={t('jobs.forms.label1')}
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="description" className={styles.label}>
                                {t('jobs.description')}
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className={styles.input}
                                rows="4"
                                placeholder={t('jobs.forms.label2')}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="salary" className={styles.label}>
                                {t('jobs.salary')}
                            </label>
                            <select
                                id="salary"
                                name="salary"
                                className={styles.input}
                                required
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                            >
                                <option value="Under $50K">{t('jobs.forms.s1')} {t('jobs.year')}</option>
                                <option value="$50K - 60K">$50K - $60K {t('jobs.year')}</option>
                                <option value="$60K - 70K">$60K - $70K {t('jobs.year')}</option>
                                <option value="$70K - 80K">$70K - $80K {t('jobs.year')}</option>
                                <option value="$80K - 90K">$80K - $90K {t('jobs.year')}</option>
                                <option value="$90K - 100K">$90K - $100K {t('jobs.year')}</option>
                                <option value="$100K - 125K">$100K - $125K {t('jobs.year')}</option>
                                <option value="$125K - 150K">$125K - $150K {t('jobs.year')}</option>
                                <option value="$150K - 175K">$150K - $175K {t('jobs.year')}</option>
                                <option value="$175K - 200K">$175K - $200K {t('jobs.year')}</option>
                                <option value="Over $200K">{t('jobs.forms.s2')} {t('jobs.year')}</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t('jobs.location')}</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className={styles.input}
                                placeholder={t('jobs.forms.compLocation')}
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <h3 className={styles.subtitle}>{t('jobs.company')}</h3>

                        <div className={styles.field}>
                            <label htmlFor="company" className={styles.label}>{t('jobs.companyName')}</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={styles.input}
                                placeholder={t('jobs.forms.compName')}
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="company_description" className={styles.label}>
                                {t('jobs.companyDesc')}
                            </label>
                            <textarea
                                id="company_description"
                                name="company_description"
                                className={styles.input}
                                rows="4"
                                placeholder={t('jobs.forms.compDesc')}
                                value={companyDescription}
                                onChange={(e) => setCompanyDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="contact_email" className={styles.label}>
                                {t('jobs.mail')}
                            </label>
                            <input
                                type="email"
                                id="contact_email"
                                name="contact_email"
                                className={styles.input}
                                placeholder={t('jobs.forms.emailApplicants')}
                                required
                                value={contactEmail}
                                onChange={(e) => setContactEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="contact_phone" className={styles.label}>
                                {t('jobs.phone')}
                            </label>
                            <input
                                type="tel"
                                id="contact_phone"
                                name="contact_phone"
                                className={styles.input}
                                placeholder={t('jobs.forms.phoneApplicants')}
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>

                            <div>
                                <button className={styles.submitButton} type="submit">
                                    {t('jobs.addJob')}
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddJobPage;
