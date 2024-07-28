import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import styles from "./styles/AddDeleteJobPage.module.css";
import {useState} from "react";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import {doc} from "firebase/firestore";
import {auth} from "../config/firebase.js";
const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();

    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)
    const submitForm = (e) => {
        e.preventDefault();

        const updatedJob = {
            id,
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
        updateJobSubmit(updatedJob);

        console.log("updated:",updatedJob)
        toast.success('Job Updated Successfully')

        return navigate(`/services/jobs/${id}`)
    };
    const {t} = useTranslation()
    return (
        <section className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <form onSubmit={submitForm}>
                        <h2 className={styles.title}>{t('jobs.updateJob')}</h2>

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
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>
                                {t('jobs.listingName')}
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className={styles.input}
                                placeholder="eg. Beautiful Apartment In Miami"
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
                                placeholder="Add any job duties, expectations, requirements, etc"
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
                                <option value="Under $50K">Under $50K</option>
                                <option value="$50K - 60K">$50K - $60K</option>
                                <option value="$60K - 70K">$60K - $70K</option>
                                <option value="$70K - 80K">$70K - $80K</option>
                                <option value="$80K - 90K">$80K - $90K</option>
                                <option value="$90K - 100K">$90K - $100K</option>
                                <option value="$100K - 125K">$100K - $125K</option>
                                <option value="$125K - 150K">$125K - $150K</option>
                                <option value="$150K - 175K">$150K - $175K</option>
                                <option value="$175K - 200K">$175K - $200K</option>
                                <option value="Over $200K">Over $200K</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t('jobs.location')}</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className={styles.input}
                                placeholder="Company Location"
                                required
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <h3 className={styles.subtitle}>{t('jobs.company')}</h3>

                        <div className={styles.field}>
                            <label htmlFor="company" className={styles.label}>
                                {t('jobs.companyName')}
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={styles.input}
                                placeholder="Company Name"
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
                                placeholder="What does your company do?"
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
                                placeholder="Email address for applicants"
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
                                placeholder="Optional phone for applicants"
                                value={contactPhone}
                                onChange={(e) => setContactPhone(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className={styles.submitButton} type="submit">
                                {t('jobs.updateJob')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EditJobPage;
